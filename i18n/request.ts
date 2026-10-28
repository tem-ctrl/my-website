import { notFound } from 'next/navigation';
import * as rootParams from 'next/root-params';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

// Route handlers (llms.txt, OG images) can't read root params, so they pass `locale` explicitly
export default getRequestConfig(async ({ locale: override }) => {
	const requested = override ?? (await rootParams.locale());

	if (!hasLocale(routing.locales, requested)) notFound();

	return {
		locale: requested,
		messages: (await import(`@/messages/${requested}.json`)).default,
	};
});
