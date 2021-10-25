<script>
	import { onMount } from 'svelte';
	import { language } from '../../stores';
	export let status;

	let completedColor = 'border-cadetBlue bg-cadetBlue bg-opacity-20 text-cadetBlue';
	let devColor = 'border-green-700 bg-green-700 bg-opacity-20 text-green-700';
	let maintananceColor = 'border-pink-700 bg-pink-700 bg-opacity-20 text-pink-700';

	//TODO: add default colors
	let defaultColor = '';

	let selectedColor;

	onMount(async () => {
		selectedColor = setColor(status[$language]);
	});

	function setColor(status) {
		switch (status) {
			case 'Completed':
			case 'Complet':
				return completedColor;
			case 'In development':
			case 'In dezvoltare':
				return devColor;
			case 'In maintanance':
			case 'In mentenanta':
				return maintananceColor;
			default:
				return defaultColor;
		}
	}
</script>

<div class="my-1 md:my-0">
	<span class="border-2 rounded-full px-3 {selectedColor}">{status[$language]}</span>
</div>
