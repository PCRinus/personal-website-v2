<script>
	import { theme } from '../stores';

	function toggle() {
		window.document.body.classList.toggle('dark-mode');
		$theme === 'light' ? ($theme = 'dark') : ($theme = 'light');
	}
</script>

<button on:click={toggle}>
	<slot />
</button>

<style>
	/* button {
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
	} */
	:global(body.dark-mode) {
		background-color: #0084f6;
		color: white;
	}
</style>
