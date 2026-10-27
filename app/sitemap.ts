import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { PROJECTS } from '@/lib/constants';
import { PAGES } from '@/lib/routes';
import { localizedUrl } from '@/lib/seo';

const sitemap = (): MetadataRoute.Sitemap => {
	const paths = [
		PAGES.home,
		PAGES.aboutMe,
		PAGES.projects,
		PAGES.contact,
		...PROJECTS.map(({ slug }) => PAGES.projectDetails(slug)),
	];

	return paths.map((path) => ({
		url: localizedUrl(routing.defaultLocale, path),
		changeFrequency: 'monthly',
		priority: path === PAGES.home ? 1 : 0.8,
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((locale) => [locale, localizedUrl(locale, path)])
			),
		},
	}));
};

export default sitemap;
