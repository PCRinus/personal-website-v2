<script>
	import translations from '../translations';
	import { language } from '../stores';
	import DarkMode from '../components/DarkMode.svelte';

	let t = translations.navbar;

	function changeLanguage(input_language) {
		$language = input_language;
	}
</script>

<nav class="flex justify-between w-full p-4">
	<div class="items-start self-center">
		<a class="mx-2.5" href=".">{t.profile[$language]}</a>
		<a class="mx-2.5" href="experience">{t.experience[$language]}</a>
		<a class="mx-2.5" href="projects">{t.projects[$language]}</a>
		<a class="mx-2.5" href="abilities">{t.abilities[$language]}</a>
		<a class="mx-2.5" href="contact">{t.contact[$language]}</a>
	</div>

	<div class="items-end self-center">
		{#if $language === 'en'}
			<button class="mx-2.5" on:click={() => changeLanguage('ro')}>🇷🇴 RO</button>
		{:else}
			<button class="mx-2.5" on:click={() => changeLanguage('en')}>🇬🇧 EN</button>
		{/if}
		<DarkMode>Toggle</DarkMode>
	</div>
</nav>

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
