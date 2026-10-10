import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user) {
    const { pathname, search } = request.nextUrl;

    const signInUrl = new URL("/signin", request.url);

    if (pathname === "/profile") {
      signInUrl.searchParams.set("reason", "profile_required");
    } else {
      signInUrl.searchParams.set("reason", "auth_required");
    }

    signInUrl.searchParams.set("callbackUrl", pathname + search);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/products/:path*"],
};