module.exports = {
	plugins:
		// process.env.NODE_ENV !== 'development'
		// 	?
		['tailwindcss', 'autoprefixer', ['cssnano', { preset: 'default' }], 'postcss-preset-env'],
	// : ['tailwindcss', 'postcss-preset-env'],
};
