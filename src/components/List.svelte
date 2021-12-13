<script>
  import Icon from '@iconify/svelte';

	export let listHeader;
	export let listItems;
</script>

<div class="mt-8 mr-4">
	<h2
		class="lg:text-2xl uppercase font-semibold subpixel-antialiased text-pink-600 dark:text-green-500"
	>
		{listHeader}
	</h2>
	<ul class="py-2">
		{#each listItems as item}
			<li class="flex my-2">
				<span class="h-8 self-center">
					<Icon icon="{item.icon}" color="#512bd4" width="32" height="32"/>
				</span>
				<span class="ml-2 self-center">
					{item.item}
				</span>
			</li>
		{/each}
	</ul>
</div>
