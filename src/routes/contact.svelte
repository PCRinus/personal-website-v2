<script context="module">
	export const prerender = true;

	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import translations from '../translations';
	import { language } from '../stores';

	let form = translations.pages.contact;
</script>

<h1 class="text-3xl lg:text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{form.form_header[$language]}
</h1>

<form name="contact" method="post" netlify netlify-honeypot="bot-field">
	<div class="flex flex-col my-4 max-w-lg">
		<input type="hidden" name="form-name" value="contact" />
		<input class="hidden" type="text" name="bot-field" />
		<label
			>{form.form_label_name[$language]}
			<input
				type="text"
				name="name"
				class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
			/>
		</label>
		<label
			>{form.form_label_email}
			<input
				type="email"
				name="email"
				class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
			/>
		</label>
		<label
			>{form.form_label_message[$language]}
			<textarea
				name="message"
				class="mt-1 lg:mt-3 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-jet-light"
			/>
		</label>
		<div>
			<PrimaryButton>
				<span slot="icon">✉️</span>
				<span slot="text">
					{form.form_submit_button[$language]}
				</span>
			</PrimaryButton>
		</div>
	</div>
</form>
