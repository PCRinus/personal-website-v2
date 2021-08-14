<script>
	import { createEventDispatcher } from 'svelte';
	export let disabled = '';

	const dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button
	class="w-32 h-8 lg:w-48 lg:h-12 my-4 text-gray-100 bg-purple-600 hover:bg-purple-700 hover:text-gray-100 rounded-sm disabled:opacity-50 {disabled}"
	on:click={click}
>
	<slot />
</button>
