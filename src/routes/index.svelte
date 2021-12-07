<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import List from '../components/List.svelte';
	import Icon from '@iconify/svelte';

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

	<PrimaryButton>
		<span slot="icon">
			<Icon icon="fe:document" />
		</span>
		<span slot="text">
			<a
				href="https://drive.google.com/file/d/1_6x2gZaouzkefqzgZpYD5uYgRW_22jik/view?usp=sharing"
				target="_blank">{t.cv[$language]}</a
			>
		</span>
	</PrimaryButton>

	<PrimaryButton
		text_color={'text-white hover:text-gray-100'}
		bg_color={'bg-github hover:bg-github-dark'}
	>
		<span slot="icon">
			<Icon icon="bi:github" />
		</span>
		<span slot="text">
			<a class="ml-2" href="https://github.com/PCRinus" target="_blank">{t.github[$language]}</a>
		</span>
	</PrimaryButton>

	<PrimaryButton
		text_color={'text-white hover:text-gray-100'}
		bg_color={'bg-linkedin hover:bg-linkedin-dark'}
	>
		<span slot="icon">
			<Icon icon="bi:linkedin" />
		</span>
		<span slot="text">
			<a class="ml-2" href="https://www.linkedin.com/in/mircea-casapu/" target="_blank"
				>{t.linkedin[$language]}</a
			>
		</span>
	</PrimaryButton>
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
