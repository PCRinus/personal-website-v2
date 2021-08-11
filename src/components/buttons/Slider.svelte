<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function toggle() {
		dispatch('themeChange', {
			text: 'Hello!'
		});
		dispatch('languageChange', {
			text: 'Test'
		});
	}

	// import { theme } from '../../stores';

	// function slide() {
	// 	window.document.body.classList.toggle('dark');
	// 	$theme === 'light' ? ($theme = 'dark') : ($theme = 'light');
	// }
</script>

<div class="flex items-center justify-center w-full mb-12">
	<label for="toogleA" class="flex items-center cursor-pointer">
		<div class="mr-3 font-medium">
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
		<div class="ml-3 font-medium">
			<slot name="right-label" />
		</div>
	</label>
</div>

<style>
	input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #48bb78;
	}
</style>
