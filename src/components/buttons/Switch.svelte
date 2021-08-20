<script>
	import { createEventDispatcher } from 'svelte';
	export let checked = false;

	let bgGreen = 'dark:bg-green-500';

	const dispatch = createEventDispatcher();

	function clickSwitch() {
		dispatch('themeChange');
		dispatch('languageChange');
	}
</script>

<div class="flex">
	<slot name="left-label" />

	<label class="switch w-16 h-8 relative inline-block">
		<input class="sr-only" type="checkbox" bind:checked on:click={clickSwitch} />
		<span
			class="slider absolute cursor-pointer inset-0 bg-gray-50 dark:bg-gray-300 before:bg-gray-700 rounded-3xl"
		/>
	</label>

	<slot name="right-label" />
</div>

<style>
	.slider {
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}
	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 5px;
		bottom: 3px;
		-webkit-transition: 0.3s;
		transition: 0.3s;
		border-radius: 50%;
	}
	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(28px);
		@apply bg-purple-700;
	}
</style>
