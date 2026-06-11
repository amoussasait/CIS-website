import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Middleware is simplified - actual auth check happens in dashboard layout
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
