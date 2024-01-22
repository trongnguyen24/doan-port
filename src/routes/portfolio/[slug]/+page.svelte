<script lang="ts">
	import { onMount } from 'svelte';

	import Blocks from '$lib/mdstyle/Blocks.svelte';
	import Block from '$lib/mdstyle/Block.svelte';

	export let data: any;
</script>

<div class=" pb-24 md:pb-32">
	<svelte:component this={data.content} />
</div>

<style>
</style>
