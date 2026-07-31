import { NextRequest, NextResponse } from "next/server";

const ALLOWED_BOTS = [
  "googlebot", "bingbot", "yandexbot", "duckduckbot",
  "facebookexternalhit", "twitterbot", "linkedinbot", "applebot",
];

const BLOCKED_BOTS = [
  "python-requests", "scrapy", "phantomjs", "selenium",
  "ahrefsbot", "semrushbot", "mj12bot", "dotbot",
  "blexbot", "dataforseobot", "sqlmap", "nikto",
];

const BLOCKED_PATHS = [
  "/wp-admin", "/wp-login", "/.env",
  "/phpmyadmin", "/.git", "/xmlrpc.php",
];

const SECURITY_HEADERS = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(self)",
};

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const isGoodBot = ALLOWED_BOTS.some((bot) => ua.includes(bot));
  if (isGoodBot) return NextResponse.next();

  const isBadBot = BLOCKED_BOTS.some((bot) => ua.includes(bot));
  if (isBadBot) return new NextResponse("Access denied", { status: 403 });

  const isSuspiciousPath = BLOCKED_PATHS.some((p) => pathname.startsWith(p));
  if (isSuspiciousPath) return new NextResponse("Not found", { status: 404 });

  const response = NextResponse.next();
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
