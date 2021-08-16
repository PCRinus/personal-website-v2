<script>
	import translations from '../translations';
	import { language, theme } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import TextInput from '../components/forms/TextInput.svelte';
	import EmailInput from '../components/forms/EmailInput.svelte';
	import TextArea from '../components/forms/TextArea.svelte';
	import Mailbox from '../images/Mailbox.svelte';

	let form = translations.pages.contact;
</script>

<h1 class="text-3xl lg:text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{form.form_header[$language]}
</h1>

<form name="contact" method="POST" data-netlify="true">
	<div class="flex flex-col my-4 max-w-lg">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="mt-2">
			<span>
				{form.form_label_name[$language]}
			</span>
			<TextInput netlifyName="name" />
		</label>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="mt-2">
			<span>
				{form.form_label_email}
			</span>
			<EmailInput netlifyName="email1" />
		</label>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="mt-2">
			<span>
				{form.form_label_message[$language]}
			</span>
			<TextArea netlifyName="message" />
		</label>

		<PrimaryButton type="submit">✉️ {form.form_submit_button[$language]}</PrimaryButton>
	</div>
</form>
<!-- <Mailbox themeChange={theme} primary={$theme === "light" ? "#BE185D" : "#10B981"}/> -->
