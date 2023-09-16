import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: ['./app/**/*.tsx'],
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
				primary: '#8a2be2', // purple
				bgLight: '#eff0f3',
				light: '#202020',
				secondLight: '#fff',
				tertiaryLight: '#fff',

				bgDark: '#02030f',
				bgDarkSecond: '#070023',
				dark: '#efefef',
				secondaryDark: '#fff',
				tertiaryDark: '#fff',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};

export default config;
