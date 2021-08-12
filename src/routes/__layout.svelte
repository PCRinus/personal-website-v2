<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../stores';
	import { onMount } from 'svelte';
	import * as Cookies from '../cookies';

	onMount(async () => {
		let currentTheme = Cookies.getCookie('theme');
		$theme = await currentTheme;

		$theme === 'light'
			? window.document.body.classList.remove('dark')
			: window.document.body.classList.add('dark');
	});
</script>

<svelte:head>
	<title>Mircea Casapu - Full Stack Web Developer</title>
</svelte:head>

<Navbar />
<div class="content p-8 max-w-4xl mx-auto">
	<slot />
</div>

<!-- <Footer /> -->
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
		background-color: #1d3040;
		color: white;
	}
</style>
