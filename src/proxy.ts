import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname, search } = request.nextUrl;
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  // লগইন করা ইউজার signin/signup এ যেতে পারবে না
  if (session?.user && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // লগইন না করা ইউজার protected route এ যেতে পারবে না
  if (!session?.user && !isAuthPage) {
    const signInUrl = new URL("/signin", request.url);

    signInUrl.searchParams.set(
      "reason",
      pathname === "/profile" ? "profile_required" : "auth_required"
    );
    signInUrl.searchParams.set("callbackUrl", pathname + search);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/products/:path*", "/signin", "/signup"],
};