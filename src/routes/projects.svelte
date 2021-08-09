<script>
	import translations from '../translations';
	import { language } from '../stores';

	let projects = translations.pages.projects;
</script>

<h1>Projects</h1>

{#each projects as project}
	<br />
	<h1>{project.title[$language]}</h1>
	<h1>{project.description[$language]}</h1>
	<h1>{project.used_technologies[$language]}</h1>
	<a href={project.github_link}>{project.github_link}</a>
{/each}
