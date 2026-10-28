import { buildLlmsFullTxt } from '@/lib/llms';

export const GET = async () =>
	new Response(await buildLlmsFullTxt(), {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
