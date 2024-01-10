<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	export let data;

	let pathname: string = '';
	let firstload: number = 0;

	onMount(() => {});
	afterNavigate(() => {
		firstload++;
	});
</script>

<Header />
{#key data.url}
	{#if firstload > 1}
		<PageTransition />
	{/if}
{/key}

<div class="app">
	<main class="grid grid-cols-[1fr]">
		{#key data.url}
			<div
				class="row-start-1 col-start-1"
				in:fade={{ delay: 1100, duration: 0 }}
				out:fade={{ delay: 900, duration: 150 }}
			>
				<slot />
			</div>
		{/key}
	</main>
</div>
