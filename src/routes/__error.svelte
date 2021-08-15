<script>
	import ServerDown from '../images/ServerDown.svelte';
	import { language, theme } from '../stores';
    import translations from '../translations';
</script>

<div class="w-full">
    <ServerDown themeChange={$theme} primary={$theme === 'light' ? '#BE185D' : '#10B981'} />
	<h1 class="text-3xl mt-8 md:text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">{translations.pages.error.error_message[$language]}</h1>
</div>
