<script>
	import translations from '../translations';
	import { language } from '../stores';
	// import ProfileDescription from '../components/ProfileDescription.svelte';

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
		<div>
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
		<div class="mx-4">
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
		<div>
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

<div class="education">
	<h1 class="text-5xl lg:text-7xl mb-8 subpixel-antialiased text-pink-600 dark:text-green-500">
		{t.education.header[$language]}
	</h1>
	<h2 class="subpixel-antialiased">{t.education.institiution[$language]}</h2>
	<h2 class="subpixel-antialiased">🎓 {t.education.diploma[$language]}</h2>
	<h2 class="subpixel-antialiased">🕓 {t.education.period.start}</h2>
	<h2 class="subpixel-antialiased">{t.education.period.end}</h2>
</div>

<style>
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

	ul:first-child {
		@apply text-pink-600;
	}
</style>
