/** @type {import('@sveltejs/kit').Config} */
import netlify from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: "continue",
			pages: ['*']
		}
	}
};

export default config;
