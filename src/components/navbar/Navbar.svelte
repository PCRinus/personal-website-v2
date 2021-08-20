<script>
	import translations from '../../translations';
	import { language, mobileNavMenu } from '../../stores';
	import { fly } from 'svelte/transition';
	import MobileMenuButton from './MobileMenuButton.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import LanguageSwitch from './LanguageSwitch.svelte';

	export let segment;
	let t = translations.components.navbar;
	let visible = false;

	function toggleMobileNav() {
		$mobileNavMenu === 'hidden' ? ($mobileNavMenu = '') : ($mobileNavMenu = 'hidden');
		visible = !visible;
	}
</script>

<nav class="pt-4 lg:pt-8 bg-cadetBlue-light dark:bg-jet-light">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex items-center">
				<div>
					<a class="md:mx-2.5 text-2xl text-pink-600 dark:text-green-500 font-semibold" href="."
						>{`</m.casapu>`}</a
					>
				</div>
				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center text-xl">
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500 {segment ===
						'/'
							? 'text-pink-600 dark:text-green-500 font-semibold'
							: 'text-black dark:text-white'}"
						href=".">{t.profile[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500 {segment ===
						'/experience'
							? 'text-pink-600 dark:text-green-500 font-semibold'
							: 'text-black dark:text-white'}"
						href="experience">{t.experience[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500 {segment ===
						'/projects'
							? 'text-pink-600 dark:text-green-500 font-semibold'
							: 'text-black dark:text-white'}"
						href="projects">{t.projects[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500 {segment ===
						'/contact'
							? 'text-pink-600 dark:text-green-500 font-semibold'
							: 'text-black dark:text-white'}"
						href="contact">{t.contact[$language]}</a
					>
				</div>
			</div>
			<!-- Secondary Navbar items -->
			<div class="hidden md:flex items-center">
				<ThemeSwitch />
				<!-- <LanguageSwitch /> -->
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<MobileMenuButton on:toggleMobileNav={toggleMobileNav} {visible} />
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	{#if visible}
		<!-- content here -->
		<div class="mobile-menu md:hidden" in:fly={{ y: -200, duration: 200 }}>
			<a
				href="."
				class="block text-xl px-4 py-4 -mb-2 {segment === '/'
					? 'text-pink-700 dark:text-green-500 font-semibold'
					: 'text-black dark:text-white'}"
				on:click={toggleMobileNav}>🧑🏻 {t.profile[$language]}</a
			>
			<a
				href="experience"
				class="block text-xl px-4 py-4 -my-2 {segment === '/experience'
					? 'text-pink-700 dark:text-green-500 font-semibold'
					: 'text-black dark:text-white'}"
				on:click={toggleMobileNav}>🧑🏻‍💻 {t.experience[$language]}</a
			>
			<a
				href="projects"
				class="block text-xl px-4 py-4 -my-2 {segment === '/projects'
					? 'text-pink-700 dark:text-green-500 font-semibold'
					: 'text-black dark:text-white'}"
				on:click={toggleMobileNav}>💻 {t.projects[$language]}</a
			>
			<a
				href="contact"
				class="block text-xl px-4 py-4 -my-2 {segment === '/contact'
					? 'text-pink-700 dark:text-green-500 font-semibold'
					: 'text-black dark:text-white'}"
				on:click={toggleMobileNav}>✉️ {t.contact[$language]}</a
			>
			<ThemeSwitch />
		</div>
	{/if}
</nav>
