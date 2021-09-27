<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import SecondaryButton from '../components/buttons/SecondaryButton.svelte';
	import StatusLabel from '../components/labels/StatusLabel.svelte';

	let projects = translations.pages.projects;
</script>

<h1 class="text-3xl lg:text-7xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{projects.header[$language]}
</h1>

{#each projects.project as project}
	<br />
	<div class="md:flex md:gap-x-4 md:mb-4">
		<h1 class="text-purple-600 text-2xl dark:text-purple-300 uppercase">
			{project.title[$language]}
		</h1>
		<StatusLabel status={project.status} />
	</div>
	<h1>📖 {project.description[$language]}</h1>
	<h1>🖥️ {project.used_technologies[$language]}</h1>
	<PrimaryButton>
		<a class="mx-auto" href={project.github_link} target="_blank">🔗 GitHub</a>
	</PrimaryButton>
	{#if project.website_link}
		<SecondaryButton>
			<a class="mx-auto" href={project.website_link} target="_blank">🌐 Webiste</a>
		</SecondaryButton>
	{/if}
	<br />
{/each}
