<script>
	import Slider from '../buttons/Slider.svelte';
	import Dark from '../../icons/Dark.svelte';
	import Light from '../../icons/Light.svelte';
	import { theme } from '../../stores';

	function changeTheme() {
		window.document.body.classList.toggle('dark');
		$theme === 'light' ? ($theme = 'dark') : ($theme = 'light');
		console.log('theme changed');
	}
</script>

<Slider on:themeChange={changeTheme}>
	<span slot="left-label">☀️</span>
	<span slot="right-label">🌙</span>
</Slider>
