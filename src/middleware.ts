import { NextRequest, NextResponse } from "next/server";

const ALLOWED_BOTS = [
  "googlebot", "bingbot", "yandexbot", "duckduckbot",
  "baiduspider", "facebookexternalhit", "twitterbot",
  "linkedinbot", "slurp", "applebot",
];

const BLOCKED_BOTS = [
  "python-requests", "scrapy", "mechanize", "phantomjs",
  "selenium", "ahrefsbot", "semrushbot", "mj12bot",
  "dotbot", "blexbot", "dataforseobot", "masscan",
  "sqlmap", "nikto", "zgrab", "nmap",
];

const BLOCKED_PATHS = [
  "/wp-admin", "/wp-login", "/.env", "/config",
  "/phpmyadmin", "/.git", "/backup", "/xmlrpc.php",
];

const SECURITY_HEADERS = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(self)",
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  // 1. Skip static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".webp") ||
    pathname.includes(".svg") ||
    pathname.includes(".ico") ||
    pathname.includes(".json") ||
    pathname.includes(".txt") ||
    pathname.includes(".xml")
  ) {
    return NextResponse.next();
  }

  // 2. Explicitly allow good bots — check FIRST before block list
  const isGoodBot = ALLOWED_BOTS.some((bot) => ua.includes(bot));
  if (isGoodBot) {
    return NextResponse.next();
  }

  // 3. Block bad bots
  const isBadBot = BLOCKED_BOTS.some((bot) => ua.includes(bot));
  if (isBadBot) {
    return new NextResponse("Access denied", { status: 403 });
  }

  // 4. Block suspicious paths
  const isSuspiciousPath = BLOCKED_PATHS.some((p) => pathname.startsWith(p));
  if (isSuspiciousPath) {
    return new NextResponse("Not found", { status: 404 });
  }

  // 5. Add security headers to all responses
  const response = NextResponse.next();
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
