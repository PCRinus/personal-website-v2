<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import * as Cookies from '../cookies';
	import { language, theme } from '../stores';
	import Swoosh from '../icons/Swoosh.svelte';
	import { page } from '$app/stores';

	onMount(async () => {
		let currentTheme = await Cookies.getCookie('theme');
		let currentLanguage = await Cookies.getCookie('language');

		if (currentTheme !== null) {
			currentTheme === 'light'
				? window.document.body.classList.remove('dark')
				: window.document.body.classList.add('dark');
			currentTheme === 'light' ? ($theme = 'light') : ($theme = 'dark');
		} else {
			window.document.body.classList.remove('dark');
			Cookies.setCookie('theme', 'light', 7);
		}

		if (currentLanguage === null) {
			Cookies.setCookie('language', 'en', 7);
		} else {
			$language = currentLanguage;
		}
	});
</script>

<svelte:head>
	<title>Mircea Casapu - Full Stack Web Developer</title>
</svelte:head>

<div class="lg:text-2xl">
	<Navbar segment={$page.path} />
	<Swoosh themeChange={$theme} color={$theme === 'light' ? 'AFD3D5' : '5A5D72'} />
	<div class="content p-8 max-w-5xl mx-auto -my-12 md:-my-0">
		<slot />
	</div>
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		background-color: white;
		color: black;
		transition: background-color 0.3s;
	}
	:global(body.dark) {
		@apply bg-jet-dark;
		color: white;
	}
</style>
