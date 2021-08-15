<script>
	import translations from '../translations';
	import { language } from '../stores';
	// import ProfileDescription from '../components/ProfileDescription.svelte';

	let t = translations.pages.index;
</script>

<h1 class="text-5xl mb-8 subpixel-antialiased text-pink-600 dark:text-green-500">
	{t.hero_greeting[$language]}
	<span id="wave">👋🏼</span>
</h1>
<h2 class="my-8 subpixel-antialiased text-pink-600 dark:text-green-500">
	{t.hero_subgreeting[$language]}
</h2>
<!-- <ProfileDescription /> -->

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
</style>
