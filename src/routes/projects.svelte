<script>
	import translations from '../translations';
	import { language } from '../stores';
	import PrimaryButton from '../components/buttons/PrimaryButton.svelte';
	import SecondaryButton from '../components/buttons/SecondaryButton.svelte';

	let projects = translations.pages.projects;
</script>

<h1 class="text-3xl lg:text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{projects.header[$language]}
</h1>

{#each projects.project as project}
	<br />
	<h1 class="my-4 text-purple-600 text-2xl dark:text-purple-300">{project.title[$language]}</h1>
	<h1>📖 {project.description[$language]}</h1>
	<h1>🖥️ {project.used_technologies[$language]}</h1>
	<PrimaryButton>
		<a class="mx-auto" href={project.github_link}>🔗 GitHub</a>
	</PrimaryButton>
	<SecondaryButton>
		<a class="mx-auto" href={project.website_link}>🌐 Webiste</a>
	</SecondaryButton>
{/each}
