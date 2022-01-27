<script>
	import translations from '../translations';
	import { language } from '../stores';
	import Card from '../components/card/Card.svelte';
	import OrderBy from '../components/OrderBy.svelte';
	import { DateTime } from 'luxon';

	let headers = translations.pages.experiences;
	let jobs = translations.pages.experiences.job_experience;

	const orderByFirstExperience = () => {
		jobs = jobs.sort((a, b) => {
			if (
				DateTime.fromFormat(a.employment_period.start[$language], 'yyyy-mm-dd').toJSDate() <
				DateTime.fromFormat(b.employment_period.start[$language], 'yyyy-mm-dd').toJSDate()
			)
				return -1;
			if (
				DateTime.fromFormat(a.employment_period.start[$language], 'yyyy-mm-dd').toJSDate() >
				DateTime.fromFormat(b.employment_period.start[$language], 'yyyy-mm-dd').toJSDate()
			)
				return 1;
			return 0;
		});
	};

	const orderByLatestExperience = () => {
		jobs = jobs.sort((a, b) => {
			if (
				DateTime.fromFormat(a.employment_period.start[$language], 'yyyy-mm-dd').toJSDate() <
				DateTime.fromFormat(b.employment_period.start[$language], 'yyyy-mm-dd').toJSDate()
			) {
				return 1;
			}
			if (
				DateTime.fromFormat(a.employment_period.start[$language], 'yyyy-mm-dd').toJSDate() >
				DateTime.fromFormat(b.employment_period.start[$language], 'yyyy-mm-dd').toJSDate()
			) {
				return -1;
			}
			return 0;
		});
	};
</script>

<div>
	<div class="flex flex-col md:flex-row justify-between">
		<h1 class="text-3xl lg:text-7xl subpixel-antialiased text-pink-600 dark:text-green-500">
			{headers.job_header[$language]}
		</h1>

		<div class="w-44 md:w-auto">
			<OrderBy on:orderFirst={orderByFirstExperience} on:orderLast={orderByLatestExperience} />
		</div>
	</div>

	{#each jobs as job}
		<Card>
			<h1 slot="title" class="mb-4 text-purple-600 dark:text-purple-300 text-2xl uppercase">
				{job.job_title} -
				<span class="text-purple-900 dark:text-purple-300 text-xl">
					{job.employer}
				</span>
			</h1>
			<h1 slot="time-period" class="my-2">
				⏱️ {job.employment_period.start[$language]} - {job.employment_period.end[$language]}
			</h1>
			<h1 slot="location" class="my-2">📍 {job.location}</h1>
			<h1 slot="description" class="my-2">📖 {job.job_description[$language]}</h1>
			<h1 slot="tech-stack" class="my-2">🖥️ {job.used_technologies}</h1>
		</Card>
	{/each}
</div>
