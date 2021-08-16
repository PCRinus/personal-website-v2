<script>
	import { createEventDispatcher } from 'svelte';
	export let disabled = '';

	const dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button
	class="w-auto h-auto my-4 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 hover:text-gray-100 rounded-sm disabled:opacity-50 {disabled}"
	on:click={click}
>
	<slot />
</button>
