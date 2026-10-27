import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'fr'],

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: 'en',
});
