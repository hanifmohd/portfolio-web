import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except those starting with:
    // - api, _next, _vercel, .*\\..*  (files with extensions)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
