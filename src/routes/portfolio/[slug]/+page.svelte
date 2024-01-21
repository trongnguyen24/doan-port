<script lang="ts">
	import { onMount } from 'svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Blocks from '$lib/mdstyle/Blocks.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';

	export let data: any;
</script>

<Gsapsetup />
<PageGsapRefresh />
<hgroup class="fadein max-w-screen-xl container py-28"></hgroup>

<Blocks>
	<Block size="3" position="1">aaaaaa</Block>
	<Block size="3" position="2">aaaaaa</Block>
	<Block size="1" position="2">aaaaaa</Block>
	<Block>aaaaaa</Block>
	<Block>aaaaaa</Block>
	<Block size="1">aaaaaa</Block>
</Blocks>

<div class="prose">
	<svelte:component this={data.content} />
</div>

<style>
</style>
