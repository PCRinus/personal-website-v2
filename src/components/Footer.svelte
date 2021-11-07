<script>
	import translations from '../translations';
	import { language } from '../stores';

	let footer = translations.components.footer;
</script>

<footer class="footer">
	<div class="max-w-5xl mx-auto p-8">
		<hr />
		<div class="flex justify-between">
			<div class="max-w-sm my-4">
				<h1 class="mb-4 text-3xl text-pink-600 dark:text-green-500 font-semibold">
					{`</m.casapu>`}
				</h1>
				<h1 class="my-2">{@html footer.text[$language]}</h1>
				<h1 class="my-2">{@html footer.coffee[$language]}</h1>
			</div>
		</div>
	</div>
</footer>
