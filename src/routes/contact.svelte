<script>
	import translations from '../translations';
	import { language } from '../stores';
	import Button from '../components/Button.svelte';
	import TextInput from '../components/forms/TextInput.svelte';
	import TextArea from '../components/forms/TextArea.svelte';

	let form = translations.pages.contact;
</script>

<h1 class="text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{form.form_header[$language]}
</h1>

<form name="contact" method="POST" data-netlify="true">
	<div class="flex flex-col my-4 max-w-lg">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="">
			<span class="">
				{form.form_label_name[$language]}
			</span>
			<TextInput name="name" />
		</label>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<span>
				{form.form_label_email}
			</span>
			<TextInput name="email" />
		</label>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<span>
				{form.form_label_message[$language]}
			</span>
			<TextArea name="message" />
		</label>

		<Button type="submit">{form.form_submit_button[$language]}</Button>
	</div>
</form>
