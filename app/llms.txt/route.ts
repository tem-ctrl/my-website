import { buildLlmsTxt } from '@/lib/llms';

export const GET = async () =>
	new Response(await buildLlmsTxt(), {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
