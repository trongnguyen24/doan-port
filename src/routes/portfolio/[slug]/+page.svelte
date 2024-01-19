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
	<h1 class="title-1 text-gray-900">
		{data.meta.title}
	</h1>
	<div class="md-block">
		<h2 class="title-3 col-span-3 text-gray-600">
			I provided effective solutions and defined the style orientation for a startup brand, as well
			as producing social media products, and building a website based on WordPress.
		</h2>
	</div>
</hgroup>

<div class="prose">
	<svelte:component this={data.content} />
</div>

<style>
	.md-block {
		@apply grid grid-cols-4 gap-6;
	}
</style>
