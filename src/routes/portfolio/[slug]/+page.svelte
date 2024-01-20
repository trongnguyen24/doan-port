<script>
	import { onMount } from 'svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Blocks from '$lib/mdstyle/Blocks.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Gsapsetup />
<PageGsapRefresh />
<hgroup class="fadein max-w-screen-xl container py-28"></hgroup>
<Blocks>
	<Block offset={1} col={2}>{data.meta.title}</Block>
</Blocks>
<Blocks>
	<Block offset={3} col={1}>{data.meta.title}</Block>
</Blocks>
<Blocks>
	<Block offset={2} col={3}>{data.meta.title}</Block>
</Blocks>

<div class="prose">
	<svelte:component this={data.content} />
</div>

<style>
</style>
