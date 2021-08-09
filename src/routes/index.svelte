<script>
	import translations from '../translations';
	import { language } from '../stores';

	let t = translations.pages.index.hero_greeting;
</script>

<svelte:head>
	<title>Mircea Casapu - Full Stack Web Developer</title>
</svelte:head>

<h1 class="text-lg text-center">{t[$language]}</h1>
