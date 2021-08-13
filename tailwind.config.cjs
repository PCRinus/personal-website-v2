const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms')],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			purple: colors.purple,
			red: colors.rose,
			yellow: colors.amber,
			pink: colors.pink,
			green: colors.green,
			cadetBlue: {
				light: '#AFD3D5',
				DEFAULT: '#62a8ac',
				dark: '#3F7578'
			},
			jet: {
				light: '#5A5D72',
				DEFAULT: '#30323D',
				dark: '#1B1C22'
			}
		}
	}
};
