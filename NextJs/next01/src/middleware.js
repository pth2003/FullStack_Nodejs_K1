import { NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLogin = false;
  //   const pathName = request.nextUrl.pathname;
  //   const response = NextResponse.next();
  //   response.cookies.set("email", "pth@gmail.com");
  //   return response;
  //   if (pathName === "/don-hang") {
  //     return NextResponse.rewrite(new URL("/Product", request.url));
  //   }
  if (!isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/don-hang/:path*"],
};

// next request : lấy được thông tin từ http request

// NextResponse : trả về các thông tin (redirect , headers , response message body )
