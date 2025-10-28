import csrf from "edge-csrf";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import rateLimit from "@/utils/rate-limit";
import { headers } from "next/headers";

const limiter = rateLimit({
  limit: 30,
});

// // initalize protection function
// const csrfProtect = csrf({
//   cookie: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });

const allowedOrigins = ["https://theoldsiam.co.th"];

function csrfProtect(request: NextRequest, response: NextResponse) {
  let csrfError = null;
  if (
    request.headers.get("X-CSRF-Token") == process.env.NEXT_PUBLIC_CSRF_SECRET
  ) {
    csrfError = true;
  } else {
    csrfError = false;
  }
  return csrfError;
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse("Not allowed", {
      status: 403,
      statusText: "Forbidden",
    });
  }

  // if (
  //   protectedApiRoutes.some((route) =>
  //     request.nextUrl.pathname.startsWith(route)
  //   )
  // ) {
  //   const csrfError = csrfProtect(request, response);
  //   // check result

  //   if (!csrfError) {
  //     return new NextResponse("invalid csrf token", { status: 403 });
  //   }
  //   // csrf protection
  //   const headersList = await request.headers;
  //   const csrfToken = headersList.get("X-CSRF-Token") || "missing";

  //   const { isRateLimited, currentUsage, limit } = limiter.check(csrfToken);
  //   // console.log(`Rate limit: ${currentUsage}/${limit}`, isRateLimited);

  //   if (isRateLimited) {
  //     return new Response("Rate limit reached", {
  //       status: 418,
  //       statusText: "Too Many Requests",
  //     });
  //   }
  // }

  return response;
}
