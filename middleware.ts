import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const isLoggedIn: boolean = false;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("this work only on matcher array");

  const cookies = request.cookies;
  console.log("cookies", cookies);
  const token = request.cookies.get("token")?.value;

  //   console.log("token", token);
  console.log("request.nextUrl.pathname", request.nextUrl.pathname);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //   console.log("next");

  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/dashboard"],
};
