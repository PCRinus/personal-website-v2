<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import List from '../components/List.svelte';

	let t = translations.pages.index;
</script>

<div class="mb-4">
	<h1 class="text-5xl lg:text-7xl mb-8 subpixel-antialiased text-pink-600 dark:text-green-500">
		{t.hero_greeting[$language]}
		<span>👋🏼</span>
	</h1>

	<h2 class="subpixel-antialiased">
		{@html t.hero_subgreeting[$language]}
	</h2>

	<PrimaryButton
		><a
			href="https://drive.google.com/file/d/19wP-B6hlkH9jehZlzqd8habHch8mhC8G/view?usp=sharing"
			target="_blank">📝 {t.cv[$language]}</a
		></PrimaryButton
	>

	<PrimaryButton
		text_color={'text-white hover:text-gray-100'}
		bg_color={'bg-github hover:bg-github-dark'}
		><a href="https://github.com/PCRinus" target="_blank">{t.github[$language]}</a></PrimaryButton
	>

	<PrimaryButton
		text_color={'text-white hover:text-gray-100'}
		bg_color={'bg-linkedin hover:bg-linkedin-dark'}
		><a href="https://www.linkedin.com/in/mircea-casapu/" target="_blank">{t.linkedin[$language]}</a
		></PrimaryButton
	>
</div>

<hr class="text-pink-600 dark:text-green-500" />

<div class="about-me">
	<h1 class="text-5xl lg:text-7xl my-8 subpixel-antialiased text-pink-600 dark:text-green-500">
		{t.about_me.header[$language]}
	</h1>
	<p>{@html t.about_me.background[$language]}</p>

	<div class="mt-2 flex flex-row flex-wrap justify-between">
		<List
			listHeader={t.about_me.languages_header[$language]}
			listItems={t.about_me.skills.languages}
		/>

		<List
			listHeader={t.about_me.frameworks_header[$language]}
			listItems={t.about_me.skills.frameworks}
		/>

		<List listHeader={t.about_me.tools_header[$language]} listItems={t.about_me.skills.tools} />
	</div>
</div>
