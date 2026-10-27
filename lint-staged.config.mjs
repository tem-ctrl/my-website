/** @type {import('lint-staged').Configuration} */
const config = {
	// Type check the whole project (tsc can't check single files against tsconfig)
	'*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix', 'prettier --write'],

	'*.{js,mjs}': ['eslint --fix', 'prettier --write'],

	'*.{css,md,json}': 'prettier --write',
};

export default config;
