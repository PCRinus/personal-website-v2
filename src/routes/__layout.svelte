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
</style>
