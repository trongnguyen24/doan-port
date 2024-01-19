<script>
	import { onMount } from 'svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Gsapsetup />
<PageGsapRefresh />
<hgroup class="fadein max-w-screen-xl container py-28">
	<h1 class="title-3 text-violet-400">
		{data.meta.title}
	</h1>
	<h2 class="title-2 text-gray-500">
		I provided effective solutions and defined the style orientation for a startup brand, as well as
		producing social media products, and building a website based on WordPress and Haravan.
	</h2>
</hgroup>

<div class="prose">
	<svelte:component this={data.content} />
</div>
