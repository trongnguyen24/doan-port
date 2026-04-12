<script lang="ts">
	// @ts-nocheck
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { tick } from 'svelte';
	import { get } from 'svelte/store';
	import { isDarkMode } from '$lib/stores/darkMode';

	let thumbContainer: HTMLDivElement;
	let fullresContainer: HTMLDivElement;
	let showFullres = false;

	/**
	 * Parse srcset attribute and return the URL with the largest width descriptor.
	 * Falls back to img.src if srcset is not available.
	 */
	function getLargestSrc(img: HTMLImageElement): string | null {
		const srcset = img.getAttribute('srcset');
		if (!srcset) return img.getAttribute('src');

		const entries = srcset.split(',').map((s: string) => {
			const parts = s.trim().split(/\s+/);
			return { url: parts[0], width: parseInt(parts[1]) || 0 };
		});

		entries.sort((a: { width: number }, b: { width: number }) => b.width - a.width);
		return entries[0]?.url || img.getAttribute('src');
	}

	async function openLightbox() {
		// 1. Render fullres slot (hidden) to extract URL
		showFullres = true;
		await tick();

		// 2. Find img element -prefer fullres, fallback to thumbnail
		const fullresImg = fullresContainer?.querySelector('img');
		const thumbImg = thumbContainer?.querySelector('img');
		const img = fullresImg || thumbImg;

		if (!img) {
			showFullres = false;
			return;
		}

		// 3. Get the largest available URL
		const src = getLargestSrc(img);

		// 4. Open Fancybox (global from fancybox.umd.js in app.html)
		const dark = get(isDarkMode);
		Fancybox.show([{ src, type: 'image' }], {
			mainClass: dark ? 'fancybox-dark' : '',
			Thumbs: false,
			Carousel: {
				Navigation: false
			},
			Toolbar: {
				display: {
					left: [],
					middle: ['close'],
					right: []
				}
			}
		});

		// 5. Unmount fullres slot -no longer needed
		showFullres = false;
	}
</script>

<!-- Thumbnail (default slot) -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="reveal-img overflow-hidden rounded-xl md:rounded-3xl cursor-zoom-in"
	on:click={openLightbox}
	on:keydown={(e) => e.key === 'Enter' && openLightbox()}
	role="button"
	tabindex="0"
	bind:this={thumbContainer}
>
	<slot />
</div>

<!-- Hidden fullres: temporarily rendered to extract URL for Fancybox -->
{#if showFullres}
	<div
		bind:this={fullresContainer}
		style="position:absolute; width:0; height:0; overflow:hidden; pointer-events:none;"
	>
		<slot name="fullres" />
	</div>
{/if}

<style>
	.reveal-img :global(img) {
		width: 100%;
		height: auto;
	}
</style>
