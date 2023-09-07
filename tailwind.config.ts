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
			// backgroundImage: {
			//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			//   'gradient-conic':
			//     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			// },
			colors: {
				primaryLight: '#020202',
				secondaryLight: '#fff',
				tertiaryLight: '#fff',

				primaryDark: '#efefef',
				secondaryDark: '#fff',
				tertiaryDark: '#fff',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

export default config;
