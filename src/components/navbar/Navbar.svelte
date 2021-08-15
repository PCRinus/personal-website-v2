<script>
	import translations from '../../translations';
	import { language, mobileNavMenu } from '../../stores';
	import ThemeSlider from './ThemeSlider.svelte';
	import LanguageSlider from './LanguageSlider.svelte';
	import { fly } from 'svelte/transition';

	let t = translations.components.navbar;
	let visible = false;

	function toggleMobileNav() {
		$mobileNavMenu === 'hidden' ? ($mobileNavMenu = '') : ($mobileNavMenu = 'hidden');
		visible = !visible;
	}
</script>

<nav class="shadow-lg pt-8 bg-cadetBlue-light dark:bg-jet-light">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex items-center">
				<div>
					<a class="md:mx-2.5 text-2xl text-pink-600 dark:text-green-500" href=".">Mircea Casapu</a>
				</div>
				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center text-xl">
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
						href=".">{t.profile[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
						href="experience">{t.experience[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
						href="projects">{t.projects[$language]}</a
					>
					<a
						class="mx-2.5 transition duration-200 hover:text-pink-600 dark:hover:text-green-500"
						href="contact">{t.contact[$language]}</a
					>
				</div>
			</div>
			<!-- Secondary Navbar items -->
			<div class="hidden md:flex items-center">
				<ThemeSlider />
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button" on:click={toggleMobileNav}>
					<svg
						class=" w-6 h-6 {visible === true
							? 'text-pink-700 dark:text-green-500'
							: 'text-black dark:text-white'} "
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	{#if visible}
		<!-- content here -->
		<div class="mobile-menu" transition:fly={{ y: -200, duration: 200 }}>
			<a href="." class="block text-xl px-4 py-4 font-semibold -mb-2" on:click={toggleMobileNav}
				>🧑🏻 {t.profile[$language]}</a
			>
			<a href="experience" class="block text-xl px-4 py-4 -my-2" on:click={toggleMobileNav}
				>🧑🏻‍💻 {t.experience[$language]}</a
			>
			<a href="projects" class="block text-xl px-4 py-4 -my-2" on:click={toggleMobileNav}
				>💻 {t.projects[$language]}</a
			>
			<a href="contact" class="block text-xl px-4 py-4 -my-2" on:click={toggleMobileNav}
				>✉️ {t.contact[$language]}</a
			>
		</div>
	{/if}
</nav>
