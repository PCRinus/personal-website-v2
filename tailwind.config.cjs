module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms')],
	// theme: {
	// 	colors: {
	// 		cadetBlue: {
	// 			light: '#AFD3D5',
	// 			DEFAULT: '#62a8ac',
	// 			dark: '#3F7578'
	// 		},
	// 		jet: {
	// 			light: '#5A5D72',
	// 			DEFAULT: '#30323D',
	// 			dark: '#1B1C22'
	// 		}
	// 	}
	// }
};
