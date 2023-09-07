module.exports = {
	plugins:
		process.env.NODE_ENV === 'production'
			? ['tailwindcss', 'autoprefixer', ['cssnano', { preset: 'default' }], 'postcss-preset-env']
			: ['tailwindcss', 'postcss-preset-env'],
};
