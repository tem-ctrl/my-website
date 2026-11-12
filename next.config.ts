import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	cacheComponents: true,
	partialPrefetching: true,
	// Resumes open in the browser's PDF viewer (which still offers download) instead of
	// being saved straight to disk.
	headers: async () => [
		{
			source: '/resume/:file*',
			headers: [{ key: 'Content-Disposition', value: 'inline' }],
		},
	],
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css',
			},
		},
	},
};

// Picks up ./i18n/request.ts
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
