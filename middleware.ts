import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { apiRoutePrefix } from "./route";

const isProtected = createRouteMatcher([
  "/dashboard",
  "/select-org",
  // "/organization/:id",    /organization/id
  "/organization(.*)", //organization/apapun/setelahini/icludes/only/organization
  "/board/:id",
]);
export default clerkMiddleware((auth, req) => {
  if (isProtected(req)) auth().protect();
  if (
    auth().userId &&
    !isProtected(req) &&
    !req.nextUrl.pathname.startsWith(apiRoutePrefix)
  ) {
    let path = "/select-org";
    if (auth().orgId) {
      path = `/organization/${auth().orgId}`;
    }
    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
  }
  if (
    auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== "/select-org"
  ) {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
