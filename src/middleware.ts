import { NextRequest, NextResponse } from "next/server";

export const publicRoutes = ["/splash", "/login"];

export const privateRoutes = ["/dashboard", "/users"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get("supabase-auth-token")?.value;

  const isPublic = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  const isPrivate = privateRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!authToken && isPrivate) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authToken && isPublic && pathname !== "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
