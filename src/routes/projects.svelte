<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import SecondaryButton from '../components/buttons/SecondaryButton.svelte';
	import StatusLabel from '../components/labels/StatusLabel.svelte';
	import Card from '../components/card/Card.svelte';

	let projects = translations.pages.projects;
</script>

<h1 class="text-3xl lg:text-7xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{projects.header[$language]}
</h1>

{#each projects.project as project}
	<Card>
		<div class="md:flex md:gap-x-4 md:mb-4" slot="title">
			<h1 class="text-purple-600 text-2xl dark:text-purple-300 uppercase">
				{project.title[$language]}
			</h1>
			<StatusLabel status={project.status} />
		</div>

		<h1 slot="description">📖 {project.description[$language]}</h1>
		<h1 slot="tech-stack">🖥️ {project.used_technologies[$language]}</h1>
		<div slot="button-group">
			<PrimaryButton>
				<span slot="icon">🔗</span>
				<span slot="text">
					<a class="mx-auto" href={project.github_link} target="_blank">GitHub</a>
				</span>
			</PrimaryButton>
			{#if project.website_link}
				<SecondaryButton>
					<a class="mx-auto" href={project.website_link} target="_blank">🌐 Website</a>
				</SecondaryButton>
			{/if}
		</div>
	</Card>
{/each}
