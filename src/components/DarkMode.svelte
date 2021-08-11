<script>
	import { theme } from '../stores';

	function toggle() {
		window.document.body.classList.toggle('dark');
		$theme === 'light' ? ($theme = 'dark') : ($theme = 'light');
	}
</script>

<button on:click={toggle}>
	<slot />
</button>
