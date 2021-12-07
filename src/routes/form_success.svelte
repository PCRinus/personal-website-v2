<script>
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import FormSubmitted from '../images/FormSubmitted.svelte';
	import { language, theme } from '../stores';
	import translations from '../translations';
	import Icon from '@iconify/svelte';

	const succesMessage = translations.pages.form_success;
</script>

<div class="flex flex-col md:flex-row">
	<div class="mx-auto md:mx-12 my-4 w-48 md:w-1/4">
		<FormSubmitted
			themeChange={$theme}
			checkColor={$theme === 'light' ? '#BE185D' : '#10B981'}
			phoneBackgroundColor={$theme === 'light' ? '#BE185D' : '#10B981'}
		/>
	</div>
	<div class="mx-auto">
		<h1 class="mb-4 text-3xl lg:text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
			{succesMessage.header[$language]}
		</h1>
		<h1 class="mb-4 text-xl lg:text-3xl subpixel-antialiased text-pink-600 dark:text-green-500">
			{succesMessage.thanks[$language]}
		</h1>
		<h1>{succesMessage.subheader[$language]}</h1>
		<PrimaryButton bg_color={'bg-linkedin'}>
			<span slot="icon">
				<Icon icon="bi:linkedin" />
			</span>
			<span slot="text">
				<a class="ml-2" href="https://www.linkedin.com/in/mircea-casapu/" target="_blank">
					{succesMessage.reach_out[$language]}
				</a>
			</span>
		</PrimaryButton>
	</div>
</div>
