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
						start: 'top 80% - 150px', // when the top of the trigger hits the top of the viewport
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

<section class="max-w-[1184px] container py-28">
	<h1 class="title-3 font-medium fadein"><MagicText text="Portfolio" /></h1>
	<div class="pt-40 pb-20 grid grid-cols-2 gap-x-16 gap-y-32">
		{#each data.posts as item}
			<div scroll="reveal" class="even:translate-y-24 odd:-translate-y-16">
				<div class="reveal-img overflow-hidden rounded-[3rem]">
					<picture>
						<source srcset="portfolio/{item.slug}.webp" type="image/webp" />
						<img
							class="hover:scale-[1.03] transition-all duration-700"
							src="portfolio/{item.slug}.png"
							width="512"
							height="512"
							alt={item.title}
						/>
					</picture>
				</div>
				<div class="reveal-text pt-6">
					<h2 class="title-1 text-slate-900">{item.title}</h2>
					<p class="text-slate-500">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
