<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	export let data: any;

	onMount(() => {
		// reveal on scroll
		setTimeout(() => {
			document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
				let page = gsap.fromTo(
					element,
					{},
					{
						scrollTrigger: {
							trigger: element,
							start: 'top 90%-=190px', // when the top of the trigger hits the top of the viewport
							onEnter: () => element.classList.add('reveal'),
							markers: false
						}
					}
				);
			});
		}, 1000);
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name={data.meta.description} content={data.meta.title} />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />
<div class=" pb-24 md:pb-32">
	<svelte:component this={data.content} />
</div>

<style>
</style>
