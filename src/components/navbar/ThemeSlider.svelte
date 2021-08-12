<script>
	import Slider from '../buttons/Slider.svelte';
	import { theme } from '../../stores';
	import * as Cookies from '../../cookies';
	import { onMount } from 'svelte';

	let checked;
	let current_theme;

	onMount(async () => {
		current_theme = await Cookies.getCookie('theme');
		current_theme === 'dark' ? (checked = 'checked') : (checked = '');
	});

	function changeTheme() {
		window.document.body.classList.toggle('dark');
		$theme === 'light' ? ($theme = 'dark') : ($theme = 'light');
		Cookies.setCookie('theme', `${$theme}`, 7);
	}
</script>

<Slider on:themeChange={changeTheme} {checked}>
	<span slot="left-label">☀️</span>
	<span slot="right-label">🌙</span>
</Slider>
