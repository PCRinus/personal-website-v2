<script>
	import translations from '../../translations';
	import { language, mobileNavMenu } from '../../stores';
	import ThemeSlider from './ThemeSlider.svelte';
	import LanguageSlider from './LanguageSlider.svelte';

	let t = translations.components.navbar;

	function toggleMobileNav() {
		$mobileNavMenu === 'hidden' ? ($mobileNavMenu = '') : ($mobileNavMenu = 'hidden');
	}
</script>

<!-- <nav
	class="w-full md:px-24 xl:px-48 2xl:px-96 pt-16 bg-cadetBlue-light dark:bg-jet-light"
>
	<div class="lg:flex justify-between hidden">
		<div class="items-start self-center">
			<a class="mx-2.5 transition duration-200 text-pink-600 dark:text-green-500" href="."
				>Mircea Casapu</a
			>

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

		<div class="items-end self-center">
			<ThemeSlider />
		</div>
	</div>
</nav> -->

<nav class="shadow-lg pt-8 bg-cadetBlue-light dark:bg-jet-light">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex items-center">
				<div>
					<a class="mx-2.5 text-2xl text-pink-600 dark:text-green-500" href=".">Mircea Casapu</a>
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
						class=" w-6 h-6 text-black hover:text-pink-700 dark:text-white dark:hover:text-green-500 "
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
	<div class="mobile-menu {$mobileNavMenu}">
		<ul class="">
			<li class="active">
				<a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
					>Home</a
				>
			</li>
			<li>
				<a
					href="#services"
					class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a
				>
			</li>
			<li>
				<a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
					>About</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a
				>
			</li>
		</ul>
	</div>
</nav>
