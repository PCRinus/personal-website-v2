<script>
	import translations from '../translations';
	import { language } from '../stores';
	import Card from '../components/card/Card.svelte';

	let headers = translations.pages.experiences;
	let jobs = translations.pages.experiences.job_experience;
</script>

<div>
	<h1 class="text-3xl lg:text-7xl subpixel-antialiased text-pink-600 dark:text-green-500">
		{headers.job_header[$language]}
	</h1>

	{#each jobs as job}
		<Card>
			<h1 slot="title" class="mb-4 text-purple-600 dark:text-purple-300 text-2xl uppercase">
				{job.job_title[$language]} -
				<span class="text-purple-900 dark:text-purple-300 text-xl">
					{job.employer[$language]}
				</span>
			</h1>
			<h1 slot="time-period" class="my-2">
				⏱️ {job.employment_period[$language]}
			</h1>
      <h1 slot="location" class="my-2">📍 {job.location[$language]}</h1>
      <h1 slot="description" class="my-2">📖 {job.job_description[$language]}</h1>
      <h1 slot="tech-stack" class="my-2">🖥️ {job.used_technologies[$language]}</h1>
		</Card>
	{/each}
</div>
