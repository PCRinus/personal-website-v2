<script context="module">
	export const prerender = true;

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

<!-- <form name="contact" method="POST" data-netlify="true">
	<div class="flex flex-col my-4 max-w-lg">
		<label class="mt-2">
			<span>
				{form.form_label_name[$language]}
			</span>
			<TextInput name="name" />
		</label>

		<label class="mt-2">
			<span>
				{form.form_label_email}
			</span>
			<EmailInput name="email" />
		</label>

		<label class="mt-2">
			<span>
				{form.form_label_message[$language]}
			</span>
			<TextArea name="message" />
		</label>

		<PrimaryButton type="submit">✉️ {form.form_submit_button[$language]}</PrimaryButton>
	</div>
</form> -->

<form name="contact" method="post" netlify>
	<div class="flex flex-col my-4 max-w-lg">
		<input type="hidden" name="form-name" value="test" />
		<!-- <input type="text" name="bot-field" /> -->
		<p>
			<label
				>{form.form_label_name[$language]}<input
					type="text"
					name="name"
					class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
				/></label
			>
		</p>
		<p>
			<label
				>{form.form_label_email}<input
					type="email"
					name="email"
					class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
				/></label
			>
		</p>
		<p>
			<label
				>{form.form_label_message[$language]}<textarea
					name="message"
					class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
				/></label
			>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</div>
</form>
