import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				...defaultTheme.screens,
				xs: { max: '475px' },
				smm: { max: '767px' },
				mdm: { max: '1023px' },
			},
			colors: {
				light: '#020202',
				secondaryLight: '#fff',
				tertiaryLight: '#fff',

				dark: '#efefef',
				secondaryDark: '#fff',
				tertiaryDark: '#fff',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

export default config;
