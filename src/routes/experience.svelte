<script>
	import translations from '../translations';
	import { language } from '../stores';

	let headers = translations.pages.experiences;
	let educations = translations.pages.experiences.education_experience;
	let jobs = translations.pages.experiences.job_experience;

	let sectionToggle = true;
</script>

<div>
	<h1 class="text-3xl lg:text-7xl subpixel-antialiased text-pink-600 dark:text-green-500">
		{headers.job_header[$language]}
	</h1>

	{#each jobs as job}
		<div>
			<br />
			<h1 class="mb-4 text-purple-600 dark:text-purple-300 text-2xl uppercase">
				{job.job_title[$language]} -
				<span class="text-purple-900 dark:text-purple-300 text-xl">
					{job.employer[$language]}
				</span>
			</h1>
			<h1 class="my-2">
				⏱️ {job.employment_period.start[$language]} - {job.employment_period.end[$language]}
			</h1>
			<h1 class="my-2">📍 {job.location[$language]}</h1>
			<h1 class="my-2">📖 {job.job_description[$language]}</h1>
			<h1 class="my-2">🖥️ {job.used_technologies[$language]}</h1>
		</div>
	{/each}
</div>
