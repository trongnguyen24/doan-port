<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import { getImageURL } from '$lib/js/utils.js';
	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		Fancybox.bind('[data-fancybox="gallery"]', {});
	});
</script>

<OpenGraph title="Doan's Portfolio" />
<Gsapsetup />
<PageGsapRefresh />

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"
	></script>
</svelte:head>

<section class="max-w-screen-xl container py-10 md:py-28">
	<div class="">
		<h1 class="title-1 font-medium fadein"><MagicText text="Plays" /></h1>
		<p class="title-3 mt-6 fadein text-slate-500">
			I enjoy playing around with layouts, 3D and typography.
		</p>
	</div>

	<div class="md:pt-32 pt-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (1).webp">
				<img class=" h-full w-full object-cover" src="/i (1).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (2).webp">
				<img class=" h-full w-full object-cover" src="/i (2).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (3).webp">
				<img class=" h-full w-full object-cover" src="/i (3).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (4).webp">
				<img class=" h-full w-full object-cover" src="/i (4).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (5).webp">
				<img class=" h-full w-full object-cover" src="/i (5).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (6).webp">
				<img class=" h-full w-full object-cover" src="/i (6).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (7).webp">
				<img class=" h-full w-full object-cover" src="/i (7).webp" alt="" />
			</a>
		</div>
		<div class=" aspect-square rounded-xl overflow-hidden">
			<a data-fancybox="gallery" href="/i (8).webp">
				<img class=" h-full w-full object-cover" src="/i (8).webp" alt="" />
			</a>
		</div>
	</div>
</section>
