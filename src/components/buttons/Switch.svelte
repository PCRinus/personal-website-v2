<script>
	import { createEventDispatcher } from 'svelte';
	export let checked = false;
	export let color = '#2196F3';

	const dispatch = createEventDispatcher();

	function clickSwitch() {
		dispatch('themeChange');
		dispatch('languageChange');
	}
</script>

<div class="flex">
	<slot name="left-label" />

	<label class="switch">
		<input type="checkbox" bind:checked on:click={clickSwitch} />
		<span class="slider" />
	</label>
	<slot name="right-label" />
</div>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:checked + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>
