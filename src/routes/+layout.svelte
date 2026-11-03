<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Dock from '$lib/components/Dock.svelte';
	import '$lib/style/app.css';
	let { data, children } = $props();

	let firstload: number = $state(0);

	afterNavigate(() => {
		firstload++;
	});
</script>

<Dock />
{#key data.pathname}
	{#if firstload > 1}
		<PageTransition />
	{/if}
{/key}

<div class="app">
	<main class="grid grid-cols-[1fr]">
		{#key data.pathname}
			<div
				class="row-start-1 col-start-1 inline-grid"
				in:fade={{ delay: 980, duration: 800 }}
				out:fade={{ duration: 800 }}
			>
				{@render children?.()}
			</div>
		{/key}
	</main>
</div>
