<script>
	import translations from '../translations';
	import { language } from '../stores';
	import { onMount } from 'svelte';

	let t = translations.hero_greeting;
</script>

<svelte:head>
	<title>Mircea Casapu - Full Stack Web Developer</title>
</svelte:head>

<h1>{t[$language]}</h1>
