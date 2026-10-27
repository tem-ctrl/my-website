import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// AI crawlers are welcome: the content is public and llms.txt / llms-full.txt are made for them
const AI_CRAWLERS = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-SearchBot',
	'Claude-User',
	'PerplexityBot',
	'Google-Extended',
	'Applebot-Extended',
	'CCBot',
];

const robots = (): MetadataRoute.Robots => ({
	rules: [
		{ userAgent: '*', allow: '/' },
		{ userAgent: AI_CRAWLERS, allow: '/' },
	],
	sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
