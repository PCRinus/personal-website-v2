<script>
	import Switch from '../buttons/Switch.svelte';
	import { language } from '../../stores';
	import * as Cookies from '../../cookies';
	import { onMount } from 'svelte';

	let checked;
	let current_language;

	onMount(async () => {
		current_language = await Cookies.getCookie('language');
		current_language === 'ro' ? (checked = 'checked') : (checked = '');
	});

	function changeLanguage() {
		$language === 'ro' ? ($language = 'en') : ($language = 'ro');
		Cookies.setCookie('language', `${$language}`, 7);
	}
</script>

<Switch on:languageChange={changeLanguage} {checked}>
	<span class="text-xl md:text-2xl mr-1" slot="left-label">🇬🇧</span>
	<span class="text-xl md:text-2xl ml-1" slot="right-label">🇷🇴</span>
</Switch>
