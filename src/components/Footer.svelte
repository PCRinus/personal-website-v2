<script>
	import translations from '../translations';
	import { language } from '../stores';

	let footer = translations.components.footer;
</script>

<footer class="mt-8 px-8 py-8">
	<h1 class="text-center">{@html footer.text[$language]}</h1>
	<h1 class="text-center">{@html footer.coffee[$language]}</h1>
</footer>
