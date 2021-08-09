<script>
	import translations from '../translations';
	import { language } from '../stores';

	let jobs = translations.pages.experience;
</script>

<h1>Experience</h1>

{#each jobs as job}
	<br />
	<h1>{job.job_title[$language]}</h1>
	<h1>{job.employer[$language]} - {job.employment_period.start[$language]} - {job.employment_period.end[$language]}</h1>
	<h1>{job.job_description[$language]}</h1>
	<h1>{job.location[$language]}</h1>
	<h1>{job.used_technologies[$language]}</h1>
{/each}
