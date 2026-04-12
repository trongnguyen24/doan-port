<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import MagicText from '$lib/components/MagicText.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import { previewImages } from '$lib/posts';
	import { _ } from 'svelte-i18n';

	export let data;

	// Map post slugs to their i18n translation keys
	const slugToI18nKey = {
		'newsdigest': 'newsdigest',
		'summarizer': 'summarizer',
		'tam-anh-hospital': 'tam_anh',
		'minimalist-home': 'minimalist'
	};

	onMount(() => {
		setTimeout(() => {
			document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
				gsap.fromTo(
					element,
					{},
					{
						scrollTrigger: {
							trigger: element,
							each: 0.2,
							start: 'top 100%-=60px', // when the top of the trigger hits the top of the viewport
							onEnter: () => element.classList.add('reveal'),
							markers: false
						}
					}
				);
			});
		}, 1050);
	});
	afterNavigate(() => {
		disableScrollHandling;
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 1000);
	});
</script>

<OpenGraph title="Doan's Portfolio" />
<PageGsapRefresh />

<section class="max-w-screen-xl container py-12 md:py-40">
	<div class="">
		<h1 class="title-1 font-medium fadein"><MagicText text={$_('portfolio.title')} /></h1>
		<p class="title-3 mt-6 fadein text-slate-500">
			{$_('portfolio.subtitle')}
		</p>
	</div>

	<div class="md:pt-32 pt-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32">
		{#each data.posts as item}
			{@const i18nKey = slugToI18nKey[item.slug] || item.slug}
			<div scroll="reveal" class="md:even:translate-y-24 md:odd:-translate-y-16">
				<a href="/portfolio/{item.slug}" data-sveltekit-noscroll>
					<div class="reveal-img overflow-hidden rounded-3xl">
						<div class="tranform hover:scale-[1.03] transition duration-700">
							<enhanced:img
								src={previewImages[item.image]}
								alt={$_(`posts.${i18nKey}.title`)}
								sizes="(min-width: 1024px) 38rem, (min-width: 768px) 50vw, 100vw"
							/>
						</div>
					</div>
					<div class="reveal-text pt-6">
						<h2 class="title-2 text-slate-900">{$_(`posts.${i18nKey}.title`)}</h2>
						<p class="title-3 text-slate-500">{$_(`posts.${i18nKey}.description`)}</p>
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
