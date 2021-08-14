<script>
	import translations from '../translations';
	import { language } from '../stores';

	let t = translations.pages.index.hero_greeting;
</script>

<h1 class="text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{t[$language]}
</h1>
