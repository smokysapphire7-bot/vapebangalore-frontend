import { NextRequest, NextResponse } from "next/server";

const GOOD_BOTS = [
  "googlebot", "googlebot-image", "googlebot-video",
  "adsbot-google", "google-inspectiontool",
  "bingbot", "slurp", "duckduckbot", "baiduspider",
  "facebookexternalhit", "twitterbot", "linkedinbot",
  "whatsapp", "telegrambot", "applebot",
];

const BAD_BOTS = [
  "ahrefsbot", "semrushbot", "mj12bot", "dotbot",
  "blexbot", "dataforseobot", "petalbot", "serpstatbot",
  "python-requests", "scrapy", "phantomjs", "selenium",
  "sqlmap", "nikto", "screamingfrog",
];

const BLOCKED_PATHS = [
  "/wp-admin", "/wp-login", "/.env", "/phpinfo",
  "/phpmyadmin", "/.git", "/xmlrpc.php", "/admin.php",
];

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // 1. Static files — bypass everything
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  // 2. Good bots — explicit allow first
  if (GOOD_BOTS.some((bot) => ua.includes(bot))) {
    return NextResponse.next();
  }

  // 3. Bad bots — block
  if (BAD_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 4. Suspicious paths — block
  if (BLOCKED_PATHS.some((p) => pathname.toLowerCase().startsWith(p))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // 5. Upstash rate limiting — only if keys configured
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    try {
      const { Ratelimit } = await import("@upstash/ratelimit");
      const { Redis } = await import("@upstash/redis");

      const ratelimit = new Ratelimit({
        redis: new Redis({ url: redisUrl, token: redisToken }),
        limiter: Ratelimit.slidingWindow(200, "1 m"),
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
      // Redis unavailable — fail open
    }
  }

  // 6. Security headers
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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
