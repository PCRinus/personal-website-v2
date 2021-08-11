<script>
	import translations from '../translations';
	import { language } from '../stores';

	let footer = translations.components.footer;
</script>

<footer class="h-32 px-32">
	<h1 class="mx-2.5">{footer.text[$language]}</h1>
</footer>
