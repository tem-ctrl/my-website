import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';

export const localizedUrl = (locale: string, path: string) =>
	`${SITE_URL}/${locale}${path === '/' ? '' : path}`;

interface PageMetadataOptions {
	locale: string;
	/** Path without locale prefix, e.g. PAGES.projects */
	path: string;
	title: string;
	description: string;
}

// Title/description plus canonical URL, hreflang alternates and social cards for a localized page.
// OG/Twitter images come from the opengraph-image / twitter-image files of each route.
export const pageMetadata = ({
	locale,
	path,
	title,
	description,
}: PageMetadataOptions): Metadata => {
	const url = localizedUrl(locale, path);

	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: {
				...Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, path)])),
				'x-default': localizedUrl(routing.defaultLocale, path),
			},
			// Markdown version of the site for LLMs and AI agents
			types: { 'text/markdown': `${SITE_URL}/llms.txt` },
		},
		openGraph: {
			type: 'website',
			siteName: 'Gilbert Temgoua',
			locale,
			url,
			title,
			description,
		},
		twitter: { card: 'summary_large_image', title, description },
	};
};

interface PersonJsonLdOptions {
	locale: string;
	jobTitle: string;
	description: string;
	sameAs: string[];
	knowsAbout: string[];
	email: string;
}

// schema.org Person + WebSite graph for the home page
export const personJsonLd = ({
	locale,
	jobTitle,
	description,
	sameAs,
	knowsAbout,
	email,
}: PersonJsonLdOptions) => ({
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': `${SITE_URL}/#person`,
			name: 'Gilbert Temgoua',
			givenName: 'Gilbert',
			familyName: 'Temgoua Donkoo',
			url: SITE_URL,
			image: `${SITE_URL}/assets/images/me.png`,
			jobTitle,
			description,
			email: `mailto:${email}`,
			address: { '@type': 'PostalAddress', addressLocality: 'Bafoussam', addressCountry: 'CM' },
			knowsLanguage: ['en', 'fr'],
			knowsAbout,
			sameAs,
		},
		{
			'@type': 'WebSite',
			'@id': `${SITE_URL}/#website`,
			url: SITE_URL,
			name: 'Gilbert Temgoua',
			inLanguage: locale,
			publisher: { '@id': `${SITE_URL}/#person` },
		},
	],
});
