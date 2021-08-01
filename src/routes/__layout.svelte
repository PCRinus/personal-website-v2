<script>
	import translations from '../translations';
	import { language } from '../stores';

	let t = translations.navbar;

	function changeLanguage(input_language) {
		$language = input_language;
	}
</script>

<nav>
	<a href=".">{t.profile[$language]}</a>
	<a href="experience">{t.experience[$language]}</a>
	<a href="projects">{t.projects[$language]}</a>
	<a href="abilities">{t.abilities[$language]}</a>
	<a href="contact">{t.contact[$language]}</a>

	<button on:click={() => changeLanguage('ro')}>RO</button>
	<button on:click={() => changeLanguage('en')}>EN</button>
</nav>

<slot />
