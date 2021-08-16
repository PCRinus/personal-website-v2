<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';

	let t = translations.pages.index;
</script>

<h1 class="text-5xl lg:text-7xl mb-8 subpixel-antialiased text-pink-600 dark:text-green-500">
	{t.hero_greeting[$language]}
	<span id="wave">👋🏼</span>
</h1>
<h2 class="mb-8 subpixel-antialiased">
	{t.hero_subgreeting[$language]}
</h2>

<hr class="text-pink-600 dark:text-green-500" />

<div class="about-me">
	<h1 class="text-5xl lg:text-7xl my-8 subpixel-antialiased text-pink-600 dark:text-green-500">
		{t.about_me.header[$language]}
	</h1>
	<p>{@html t.about_me.background[$language]}</p>

	<div class="mt-2 flex flex-row flex-wrap justify-between">
		<div class="mt-2">
			<h2
				class="lg:text-2xl my-2 uppercase font-semibold subpixel-antialiased text-pink-600 dark:text-green-500"
			>
				{t.about_me.languages_header[$language]}
			</h2>
			<ul class="pl-4">
				{#each t.about_me.skills.languages as languages}
					<li>{languages}</li>
				{/each}
			</ul>
		</div>
		<div class="mx-4 mt-2">
			<h2
				class="lg:text-2xl my-2 uppercase font-semibold subpixel-antialiased text-pink-600 dark:text-green-500"
			>
				{t.about_me.frameworks_header[$language]}
			</h2>
			<ul class="pl-4">
				{#each t.about_me.skills.frameworks as frameworks}
					<li>{frameworks}</li>
				{/each}
			</ul>
		</div>
		<div class="mt-2">
			<h2
				class="lg:text-2xl my-2 uppercase font-semibold subpixel-antialiased text-pink-600 dark:text-green-500"
			>
				{t.about_me.tools_header[$language]}
			</h2>
			<ul class="pl-4">
				{#each t.about_me.skills.tools as tools}
					<li>{tools}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<hr class="my-8 text-pink-600 dark:text-green-500" />

<div class="resume">
	<h1 class="text-5xl lg:text-7xl my-8 subpixel-antialiased text-pink-600 dark:text-green-500">
		{t.cv.text[$language]}
	</h1>
	<PrimaryButton
		><a
			href="https://drive.google.com/file/d/19wP-B6hlkH9jehZlzqd8habHch8mhC8G/view?usp=sharing"
			target="_blank">📝 {t.cv.button[$language]}</a
		></PrimaryButton
	>
</div>

<!-- <style>
	#wave {
		animation: wave 2s ease infinite alternate;
	}

	@keyframes wave {
		from {
			transform: rotateX(0deg);
		}
		to {
			transform: rotateX(20deg);
		}
	}
</style> -->
