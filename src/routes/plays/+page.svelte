<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import MagicText from '$lib/components/MagicText.svelte';
	import { getImageURL } from '$lib/js/utils.js';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data);
	const startFancy = () =>
		Fancybox.bind('[data-fancybox="gallery"]', {
			caption: function (fancybox, slide) {
				const figurecaption = slide.triggerEl?.querySelector('figurecaption');
				return figurecaption ? figurecaption.innerHTML : slide.caption || '';
			},
			Thumbs: false,
			Carousel: {
				Navigation: false
			},
			Toolbar: {
				display: {
					left: [],
					middle: ['close'],
					right: []
				}
			}
		});

	onMount(() => {
		setTimeout(() => {
			document.querySelectorAll('[data-fancybox="gallery"]').forEach((element) => {
				gsap.fromTo(
					element,
					{},
					{
						scrollTrigger: {
							trigger: element,
							start: 'top 100%-=60px', // when the top of the trigger hits the top of the viewport
							onEnter: () => element.classList.add('reveal'),
							markers: false
						}
					}
				);
			});
		}, 1050);
	});
</script>

<OpenGraph title="Doan's Portfolio" />
<Gsapsetup />
<PageGsapRefresh />

<section class="max-w-screen-xl container py-12 md:py-28">
	<div class="">
		<h1 class="title-1 font-medium fadein"><MagicText text="Plays" /></h1>
		<p class="title-3 mt-6 fadein text-slate-500">
			I enjoy playing around with layouts, 3D and typography.
		</p>
	</div>

	<div class="md:pt-16 reveal pt-12 py-16 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 xl:gap-10">
		{#each data.plays.items as item}
			<figure
				class="aspect-square opacity-0 transition-all delay-300 duration-700 rounded-xl md:rounded-3xl overflow-hidden"
				data-fancybox="gallery"
				on:click={startFancy}
				data-src={getImageURL(item.collectionId, item.id, item.image)}
			>
				<img
					class="h-full w-full object-cover"
					src={getImageURL(item.collectionId, item.id, item.thumb)}
					alt={item.name}
				/>
				<figurecaption>{item.name}</figurecaption>
			</figure>
		{/each}
	</div>
</section>
