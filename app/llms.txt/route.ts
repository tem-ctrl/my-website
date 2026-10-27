import { buildLlmsTxt } from '@/lib/llms';

// https://llmstxt.org: Markdown overview of the site for LLMs and AI agents
export const GET = async () =>
	new Response(await buildLlmsTxt(), {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
