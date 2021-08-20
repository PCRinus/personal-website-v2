<script>
	import Switch from '../buttons/Switch.svelte';
	import { theme } from '../../stores';
	import { onMount } from 'svelte';
	import * as Cookies from '../../cookies';

	let checked;
	let current_theme

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

<Switch {checked} on:themeChange={changeTheme}>
	<span slot="left-label">☀️</span>
	<span slot="right-label">🌙</span>
</Switch>
