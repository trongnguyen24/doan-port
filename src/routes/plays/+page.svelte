<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import MagicText from '$lib/components/MagicText.svelte';
	import { getImageURL } from '$lib/js/utils.js';

	/** @type {import('./$types').PageData} */
	export let data;

	const startFancy = () =>
		Fancybox.bind('[data-fancybox="gallery"]', {
			caption: function (fancybox, slide) {
				const figurecaption = slide.triggerEl?.querySelector('figurecaption');
				return figurecaption ? figurecaption.innerHTML : slide.caption || '';
			},
			Thumbs: false
		});
</script>

<OpenGraph title="Doan's Portfolio" />
<Gsapsetup />
<PageGsapRefresh />

<section class="max-w-screen-xl container py-10 md:py-28">
	<div class="">
		<h1 class="title-1 font-medium fadein"><MagicText text="Plays" /></h1>
		<p class="title-3 mt-6 fadein text-slate-500">
			I enjoy playing around with layouts, 3D and typography.
		</p>
	</div>

	<div class="md:pt-32 pt-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
		{#each { length: 8 } as _, i}
			<figure
				class="aspect-square rounded-xl overflow-hidden"
				data-fancybox="gallery"
				on:click={startFancy}
				data-src="/i ({i + 1}).webp"
			>
				<img class="h-full w-full object-cover" src="/i ({i + 1}).webp" alt="" />
				<figurecaption>Caption #1</figurecaption>
			</figure>
		{/each}
	</div>
</section>

<style>
</style>
