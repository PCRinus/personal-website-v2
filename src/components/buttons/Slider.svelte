<script>
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	// let checked;

	// onMount(async () => {
	// 	checked = '';
	// });

	function toggle() {
		dispatch('themeChange');
		dispatch('languageChange');
	}
</script>

<div class="flex items-center justify-center w-full mb-2">
	<label for="toogleA" class="flex items-center cursor-pointer">
		<div class="mr-2 font-medium">
			<slot name="left-label" />
		</div>
		<!-- toggle -->
		<div class="relative">
			<!-- input -->
			<input id="toogleA" type="checkbox" class="sr-only" on:click={toggle} />
			<!-- line -->
			<div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
			<!-- dot -->
			<div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
		</div>
		<!-- label -->
		<div class="ml-2 font-medium">
			<slot name="right-label" />
		</div>
	</label>
</div>

<style>
	input ~ .dot {
		@apply bg-pink-700;
	}
	input:checked ~ .dot {
		@apply bg-green-500;
		transform: translateX(100%);
	}
</style>
