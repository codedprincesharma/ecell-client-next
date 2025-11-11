import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token"); // 👈 your backend-set cookie
  const url = req.nextUrl.clone();

  // ✅ allow these routes without token
  if (
    url.pathname.startsWith("/login") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/auth") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 🚫 if no token → redirect to login
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // ✅ token exists → allow access
  return NextResponse.next();
}

// 👇 apply middleware to all pages except /login & static
export const config = {
  matcher: ["/((?!login|api|_next|auth|favicon.ico).*)"],
};
