<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="container p-8 max-w-6xl mx-auto">
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		background-color: white;
		color: black;
		transition: background-color 0.3s;
	}
	:global(body.dark) {
		background-color: #1d3040;
		color: white;
	}
</style>
