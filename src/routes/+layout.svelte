<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/style/app.css';
	export let data;

	let firstload: number = 0;

	afterNavigate(() => {
		firstload++;
	});
</script>

<Header />
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
				<slot />
			</div>
		{/key}
	</main>
</div>
