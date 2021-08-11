<script>
	import translations from '../translations';
	import { language, theme } from '../stores';
	import DarkModeButton from '../components/DarkMode.svelte';
	import Dark from '../icons/Dark.svelte';
	import Light from '../icons/Light.svelte';

	let t = translations.components.navbar;

	function changeLanguage(input_language) {
		$language = input_language;
	}
</script>

<nav class="flex justify-between w-full px-32 py-4">
	<div class="items-start self-center">
		<a class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500" href="."
			>{t.profile[$language]}</a
		>
		<a
			class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
			href="experience">{t.experience[$language]}</a
		>
		<a
			class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
			href="projects">{t.projects[$language]}</a
		>
		<a
			class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
			href="contact">{t.contact[$language]}</a
		>
	</div>

	<div class="items-end self-center">
		{#if $language === 'en'}
			<button class="mx-2.5" on:click={() => changeLanguage('ro')}>🇬🇧 EN</button>
		{:else}
			<button class="mx-2.5" on:click={() => changeLanguage('en')}>🇷🇴 RO</button>
		{/if}
		<DarkModeButton>
			{#if $theme === 'light'}
				<Light />
			{:else}
				<Dark />
			{/if}
		</DarkModeButton>
	</div>
</nav>
