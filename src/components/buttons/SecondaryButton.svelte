<script>
	let bg_color = "bg-pink-500 hover:bg-pink-700 dark:bg-green-500 dark:hover:bg-green-700"
	let text_color = "text-gray-100"
</script>

<button
	class="w-auto h-auto lg:w-48 lg:h-12 my-4 px-4 py-2 {text_color} {bg_color} rounded-sm"
>
	<slot />
</button>
