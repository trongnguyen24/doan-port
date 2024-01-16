<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Hello from '$lib/components/Hello.svelte';
	import Button from '$lib/components/Button.svelte';
	import { portfolioItems } from '$lib/data.js';

	console.log(portfolioItems);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />

<section>
	<Hello />
	<p class=" py-20">
		{#each portfolioItems as item}
			{item.title}
		{/each}
	</p>
</section>
