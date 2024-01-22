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

<svelte:component this={data.content} />

<style>
</style>
