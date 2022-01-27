<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import { language } from '../stores';
	import translations from '../translations';

	const orderBy = translations.components.order_by;

	const dispatch = createEventDispatcher();

	let hidden = 'hidden';

	const orderByFirst = () => {
		dispatch('orderFirst');
		toggleDropdown();
	};

	const orderByLatest = () => {
		dispatch('orderLast');
		toggleDropdown();
	};

	const toggleDropdown = () => {
		hidden = hidden === 'hidden' ? '' : 'hidden';
	};
</script>

<PrimaryButton on:click={toggleDropdown}>
	<p slot="text">{orderBy.button_text[$language]}</p>
	<span class="ml-2" slot="glyph">
		{#if hidden}
			<Icon icon="charm:chevron-down" />
		{:else}
			<Icon icon="charm:chevron-up" />
		{/if}
	</span>
</PrimaryButton>

<div class="{hidden} bg-zinc-100 dark:bg-zinc-700 text-base md:text-xl rounded-md px-4 py-2 mt-2">
	<ul>
		<li class="my-1">
			<button type="button" on:click={orderByFirst}>{orderBy.dropdown.first[$language]}</button>
		</li>
		<li class="my-1">
			<button type="button" on:click={orderByLatest}>{orderBy.dropdown.last[$language]}</button>
		</li>
	</ul>
</div>
