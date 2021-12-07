<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import * as Cookies from '../cookies';
	import { language, theme, upperContentHeight } from '../stores';
	import Swoosh from '../images/icons/Swoosh.svelte';
	import { page } from '$app/stores';

	onMount(async () => {
    $upperContentHeight = document.getElementsByClassName('upper-content')[0].clientHeight;
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

<div class="content lg:text-2xl" style="--uper-content-height: {`${$upperContentHeight}px`}">
	<div class="upper-content">
		<Navbar segment={$page.path} />
		<Swoosh themeChange={$theme} color={$theme === 'light' ? 'AFD3D5' : '5A5D72'} />
	</div>
	<div class="lower-content">
		<div class="inner-content p-8 max-w-5xl mx-auto -my-12 md:-my-0">
			<slot />
		</div>
		<Footer />
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(html, body) {
		height: 100%;
	}
	:global(body) {
		background-color: white;
		color: black;
		transition: background-color 0.3s;
		display: flex;
		flex-direction: column;
	}

	:global(#svelte, .content) {
		height: 100%;
	}
	:global(.lower-content) {
		height: calc(100% - var(--uper-content-height));
		display: flex;
		flex-direction: column;
	}

	:global(.inner-content) {
		flex: 1 0 auto;
	}
	:global(.footer) {
		flex-shrink: 0;
	}
	:global(body.dark) {
		@apply bg-jet-dark;
		color: white;
	}
</style>
