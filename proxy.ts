import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { BASE_PATH } from "@/lib/routing";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(BASE_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
