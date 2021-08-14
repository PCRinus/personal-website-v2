<script>
	import translations from '../translations';
	import { language } from '../stores';

	let t = translations.pages.index;
</script>

<h1 class="text-5xl mb-8 subpixel-antialiased text-pink-600 dark:text-green-500">
	{t.hero_greeting[$language]}
</h1>
<h2 class="my-8 subpixel-antialiased text-pink-600 dark:text-green-500">
	{t.hero_h2[$language]}
</h2>
