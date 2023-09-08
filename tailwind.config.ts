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
			backgroundImage: {
				radialBg:
					'linear-gradient(1turn, #000000 7.5%, #3f361617 20%, #0c0c0c6c),\
        linear-gradient(to right, #000000 30%, #161201be, #524210cc),',
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
