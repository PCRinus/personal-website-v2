<script>
	import translations from '../../translations';
	import { language } from '../../stores';
	import ThemeSlider from './ThemeSlider.svelte';
	import LanguageSlider from './LanguageSlider.svelte';

	let t = translations.components.navbar;
</script>

<nav class="flex justify-between w-full px-32 py-4">
	<div class="items-start self-center">
		<a class="mx-2.5 transition duration-200 text-pink-600 dark:text-green-500" href="."
			>Mircea Casapu</a
		>

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
		<LanguageSlider />
		<!-- <ThemeSlider /> -->
	</div>
</nav>
