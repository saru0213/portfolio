import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
  const token = await getToken({ req: request, secret });

  console.log("Middleware check: token =", token);

  if (!token) {
    console.log("No valid token found, redirecting to loginform");
    return NextResponse.redirect(new URL("/loginform", request.url));
  }

  console.log("Token verified successfully:", token);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/careerplanning/:path*",
    "/profiling/:path*",
    "/prejobsearch/:path*",
    "/learn/:path*",
    "/technical/:path*",
  ],
  // matcher: ["/((?!$).*)"],
};
