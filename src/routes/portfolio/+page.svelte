<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import MagicText from '$lib/components/MagicText.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	export let data;

	onMount(() => {
		document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
			gsap.fromTo(
				element,
				{},
				{
					scrollTrigger: {
						trigger: element,
						start: 'top 69%%', // when the top of the trigger hits the top of the viewport
						onEnter: () => element.classList.add('reveal'),
						markers: false
					}
				}
			);
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />

<section class=" max-w-screen-xl container py-20">
	<h1 class="title-3 font-medium"><MagicText text="Portfolio" /></h1>

	<div class="py-20 grid grid-cols-2 gap-x-16 gap-y-20">
		{#each data.posts as item}
			<div scroll="reveal" class="even:translate-y-40">
				<div class="reveal-img overflow-hidden rounded-[3rem]">
					<img src="{item.slug}.png" alt="" />
				</div>
				<div class="reveal-text py-6">
					<h2 class="title-1 text-slate-900">{item.title}</h2>
					<p class="text-slate-500">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
