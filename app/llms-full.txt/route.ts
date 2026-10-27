import { buildLlmsFullTxt } from '@/lib/llms';

// The whole site content as a single Markdown file, for LLMs and AI agents
export const GET = async () =>
	new Response(await buildLlmsFullTxt(), {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
