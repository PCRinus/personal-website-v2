<script>
	import Slider from '../buttons/Slider.svelte';
	import { language } from '../../stores';

	function changeLanguage() {
		$language === 'ro' ? ($language = 'en') : ($language = 'ro');
	}
</script>

<Slider on:languageChange={changeLanguage}>
	<span slot="left-label">🇬🇧</span>
	<span slot="right-label">🇷🇴</span>
</Slider>
