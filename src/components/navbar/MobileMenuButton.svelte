<script>
	import { createEventDispatcher } from 'svelte';

	export let visible;
	const dispatch = createEventDispatcher();

	function toggleMobileNav() {
		dispatch('toggleMobileNav');
	}
</script>

<button class="outline-none mobile-menu-button" on:click={toggleMobileNav}>
	<svg
		class=" w-6 h-6 {visible === true
			? 'text-pink-700 dark:text-green-500'
			: 'text-black dark:text-white'} "
		x-show="!showMenu"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path d="M4 6h16M4 12h16M4 18h16" />
	</svg>
</button>
