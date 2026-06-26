import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
	// Skip all paths that should not be internationalized. This example skips the
	// folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
}
