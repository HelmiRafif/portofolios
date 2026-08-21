import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "id"] as const;
type Locale = (typeof LOCALES)[number];

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function isPublicFile(pathname: string) {
  return pathname.includes(".");
}

function unauthorizedResponse() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Debug"',
    },
  });
}

function isAuthorized(request: NextRequest) {
  const expected = process.env.DEBUG_BASIC_AUTH;
  if (!expected) return false;

  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return false;

  try {
    // Edge runtime: use Web APIs (Buffer is not available).
    const decoded = atob(auth.slice("Basic ".length));
    return decoded === expected;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Private admin/debug routes (no locale prefix).
  if (pathname.startsWith("/debug") || pathname.startsWith("/api/admin")) {
    if (!isAuthorized(request)) return unauthorizedResponse();
    return NextResponse.next();
  }

  // Skip Next internals and static files.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/debug") ||
    pathname.startsWith("/favicon.ico") ||
    isPublicFile(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale && isLocale(maybeLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", maybeLocale, {
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const url = request.nextUrl.clone();
  const defaultLocale: Locale = "en";
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("NEXT_LOCALE", defaultLocale, {
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
