<script>
	import translations from '../translations';
	import { language } from '../stores';
	import Button from '../components/Button.svelte';

	let form = translations.pages.contact;
</script>

<h1 class="text-4xl subpixel-antialiased text-pink-600 dark:text-green-500">{form.form_header[$language]}</h1>

<form name="contact" data-netlify="true">
	<div class="flex flex-col">
		<label>
			{form.form_label_name[$language]}
			<input type="text" name="name" />
		</label>

		<label>
			{form.form_label_email}
			<input type="text" name="email" />
		</label>

		<label>
			{form.form_label_message[$language]}
			<textarea name="message" />
		</label>

		<Button type="submit">{form.form_submit_button[$language]}</Button>
	</div>
</form>
