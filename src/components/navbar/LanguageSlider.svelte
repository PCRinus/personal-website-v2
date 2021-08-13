<script>
	import Slider from '../buttons/Slider.svelte';
	import { language } from '../../stores';
	import * as Cookies from '../../cookies';
	import { onMount } from 'svelte';

	let current_language;
	let checked;

	onMount(async () => {
		current_language = await Cookies.getCookie('language');
		current_language === 'ro' ? (checked = 'checked') : (checked = '');
	});

	function changeLanguage() {
		$language === 'ro' ? ($language = 'en') : ($language = 'ro');
		Cookies.setCookie('language', `${$language}`, 7);
	}
</script>

<Slider on:languageChange={changeLanguage} {checked}>
	<span slot="left-label">🇬🇧 </span>
	<span slot="right-label"> 🇷🇴</span>
</Slider>
