const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.svelte'],
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms')],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			indigo: colors.indigo,
			purple: colors.purple,
			red: colors.rose,
			yellow: colors.amber,
			pink: colors.pink,
			green: colors.green,
      slate: colors.slate,
      zinc: colors.zinc,
      stone: colors.stone,
			cadetBlue: {
				light: '#AFD3D5',
				DEFAULT: '#62a8ac',
				dark: '#3F7578'
			},
			jet: {
				light: '#5A5D72',
				DEFAULT: '#30323D',
				dark: '#1B1C22'
			},
			linkedin: {
				DEFAULT: '#0e76a8',
				dark: "#0a5578"
			},
			github: {
				DEFAULT: '#2b3137',
				dark: '#24292d'
			}
		},
		scale: {
			0: '0',
			25: '.25',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2'
		}
	}
};
