<script>
	import { createEventDispatcher } from 'svelte';
	export let disabled = '';
	export let bg_color = 'bg-purple-600 hover:bg-purple-700';
	export let text_color = 'text-white hover:text-gray-100';

	const dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button
	class="w-auto h-auto mt-4 px-4 py-2 {text_color} {bg_color} rounded-sm disabled:opacity-50 {disabled}"
	on:click={click}
>
	<div class="flex items-center">
		<slot name="icon" />
		<slot name="text" />
	</div>
</button>
