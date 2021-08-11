<script>
	import translations from '../translations';
	import { language } from '../stores';

	let jobs = translations.pages.experiences;
</script>

<h1 class="text-5xl subpixel-antialiased text-pink-600 dark:text-green-500">
	{jobs.header[$language]}
</h1>

{#each jobs.experience as job}
	<br />
	<h1 class="my-4 text-purple-600 text-2xl">
		{job.job_title[$language]} -
		<span class="text-purple-900 dark:text-purple-300 text-xl">
			{job.employer[$language]}
		</span>
	</h1>
	<h1>⏱️ {job.employment_period.start[$language]} - {job.employment_period.end[$language]}</h1>
	<h1>📍 {job.location[$language]}</h1>
	<h1>📖 {job.job_description[$language]}</h1>
	<h1>🖥️ {job.used_technologies[$language]}</h1>
{/each}
