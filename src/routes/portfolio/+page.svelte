<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import MagicText from '$lib/components/MagicText.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import { getImageURL } from '$lib/js/utils.js';

	export let data;

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
<Gsapsetup />
<PageGsapRefresh />

<section class="max-w-screen-xl container py-12 md:py-40">
	<div class="">
		<h1 class="title-1 font-medium fadein"><MagicText text="Portfolio" /></h1>
		<p class="title-3 mt-6 fadein text-slate-500">The real work i have learning more</p>
	</div>

	<div class="md:pt-32 pt-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32">
		{#each data.posts.items as item}
			<div scroll="reveal" class="md:even:translate-y-24 md:odd:-translate-y-16">
				<a href="/portfolio/{item.slug}" data-sveltekit-noscroll>
					<div class="reveal-img overflow-hidden rounded">
						<div class="tranform hover:scale-[1.03] transition duration-700">
							<img src={getImageURL(item.collectionId, item.id, item.image)} alt={item.title} />
						</div>
					</div>
					<div class="reveal-text pt-6">
						<h2 class="title-2 text-slate-900">{item.title}</h2>
						<p class="title-3 text-slate-500">{item.description}</p>
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
