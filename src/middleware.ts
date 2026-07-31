import { NextRequest, NextResponse } from "next/server";

// ─── GOOD BOTS — explicit allowlist, checked FIRST ───────────────────────────
const GOOD_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "AdsBot-Google",
  "Google-InspectionTool",
  "Bingbot",
  "Slurp",          // Yahoo
  "DuckDuckBot",
  "Baiduspider",
  "facebot",        // Facebook
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "TelegramBot",
  "Applebot",
];

// ─── BAD BOTS — blocked after good bot check ─────────────────────────────────
const BAD_BOTS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "PetalBot",
  "serpstatbot",
  "seoscanbot",
  "ScreamingFrog",
];

// ─── SUSPICIOUS PATHS ────────────────────────────────────────────────────────
const BLOCKED_PATHS = [
  "/wp-admin",
  "/wp-login",
  "/.env",
  "/phpinfo",
  "/admin.php",
  "/.git",
  "/config",
  "xmlrpc",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") || "";
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // ── 1. STATIC FILES — bypass everything ──────────────────────────────────
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  // ── 2. GOOD BOTS — explicit allow, skip all checks ───────────────────────
  const isGoodBot = GOOD_BOTS.some((bot) =>
    ua.toLowerCase().includes(bot.toLowerCase())
  );
  if (isGoodBot) return NextResponse.next();

  // ── 3. BAD BOTS — block ──────────────────────────────────────────────────
  const isBadBot = BAD_BOTS.some((bot) =>
    ua.toLowerCase().includes(bot.toLowerCase())
  );
  if (isBadBot) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 4. SUSPICIOUS PATHS — block ──────────────────────────────────────────
  const isSuspicious = BLOCKED_PATHS.some((p) =>
    pathname.toLowerCase().includes(p)
  );
  if (isSuspicious) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // ── 5. UPSTASH RATE LIMITING — only if keys are configured ───────────────
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    try {
      const { Ratelimit } = await import("@upstash/ratelimit");
      const { Redis } = await import("@upstash/redis");

      const redis = new Redis({ url: redisUrl, token: redisToken });
      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(60, "1 m"),
        analytics: false,
        prefix: "vb_rl",
      });

      const { success, remaining } = await ratelimit.limit(ip);

      if (!success) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        });
      }

      const res = NextResponse.next();
      res.headers.set("X-RateLimit-Remaining", String(remaining));
      return applySecurityHeaders(res);
    } catch {
      // Redis unavailable — fail open, never block real users
    }
  }

  // ── 6. SECURITY HEADERS ──────────────────────────────────────────────────
  return applySecurityHeaders(NextResponse.next());
}

function applySecurityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-XSS-Protection", "1; mode=block");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://*.upstash.io https://railway.app",
      "frame-ancestors 'none'",
    ].join("; ")
  );
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
