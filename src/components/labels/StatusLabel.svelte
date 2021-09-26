<script>
	import { language } from '../../stores';
	export let status;

	let completedColor = 'border-red-200 bg-red-700 bg-opacity-70 text-red-200';
</script>

<span class="border-2 rounded-full px-4">{status[$language]}</span>
