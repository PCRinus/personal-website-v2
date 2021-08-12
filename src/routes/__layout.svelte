<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Transition from '../components/Transition.svelte';
	import { theme } from '../stores';
	import { onMount } from 'svelte';
	import * as Cookies from '../cookies';
	import { page } from '$app/stores';

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

<Navbar segment={$page.path} />
<div class="content p-8 max-w-4xl mx-auto">
	<Transition refresh={$page.path}>
		<slot />
	</Transition>
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
