<script>
</script>

<div
	class="bg-zinc-100 dark:bg-zinc-700 rounded-md mt-8 p-8 shadow-lg dark:shadow-md dark:shadow-zinc-700"
>
	<slot name="title" />
	<slot name="subtitle" />
	<div class="metadata">
		<slot name="time-period" />
		<slot name="location" />
	</div>
	<slot name="description" />
	<slot name="tech-stack" />
	<slot name="button-group" />
</div>
