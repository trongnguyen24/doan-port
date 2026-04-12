<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<div class="bg-white sticky top-0">
		<div class="text-lg font-medium magic-title py-4">{$_('experience.title')}</div>
	</div>
	<div class="flex flex-col text-slate-600 gap-6 md:gap-8">
		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job1_period')}</small>
				{$_('experience.job1_title')}
			</p>
			<p>
				{$_('experience.job1_desc')}
			</p>
		</article>

		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job2_period')}</small>
				{$_('experience.job2_title')}
			</p>
			<p>
				{$_('experience.job2_desc')}
			</p>
		</article>

		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job3_period')}</small>
				{$_('experience.job3_title')}
			</p>
			<p>
				{$_('experience.job3_desc')}
			</p>
		</article>

		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job4_period')}</small>
				{$_('experience.job4_title')}
			</p>
			<p>
				{$_('experience.job4_desc')}
			</p>
		</article>

		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job5_period')}</small>
				{$_('experience.job5_title')}
			</p>
			<p>
				{$_('experience.job5_desc')}
			</p>
		</article>

		<article>
			<p class="font-semibold flex flex-col text-slate-900">
				<small class="font-normal text-slate-600">{$_('experience.job6_period')}</small>
				{$_('experience.job6_title')}
			</p>
			<p>
				{$_('experience.job6_desc')}
			</p>
		</article>
	</div>
</section>
