<script>
	export let listHeader;
	export let listItems;
</script>

<div class="mt-2">
	<h2
		class="lg:text-2xl uppercase font-semibold subpixel-antialiased text-pink-600 dark:text-green-500"
	>
		{listHeader}
	</h2>
	<ul class="px-4 py-2">
		{#each listItems as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
