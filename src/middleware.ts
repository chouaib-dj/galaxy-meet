import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);
  if (
    ["/login", "/sign-up", "/forgot-password"].includes(
      request.nextUrl.pathname
    ) &&
    user
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl.origin));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }
  return response;
}
