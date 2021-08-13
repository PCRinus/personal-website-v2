<script>
	export let disabled = '';
</script>

<button
	class="w-32 h-8 md:w-48 md:h-12 my-4 text-gray-100 bg-purple-600 hover:bg-purple-700 hover:text-gray-100 rounded-sm disabled:opacity-50 {disabled}"
>
	<slot />
</button>
