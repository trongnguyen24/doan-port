<script lang="ts">
	// @ts-nocheck
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { get } from 'svelte/store';
	import { isDarkMode } from '$lib/stores/darkMode';

	/** URL of the full-resolution video (mp4/webm) shown in lightbox */
	export let src: string;
	/** URL of the thumbnail video (lightweight webm) shown inline */
	export let thumb: string = '';
	/** URL of a static image to use as poster/thumbnail instead of video */
	export let poster: string = '';
	/** Alt / caption text */
	export let alt: string = '';

	function openLightbox() {
		const dark = get(isDarkMode);

		Fancybox.show(
			[
				{
					src,
					type: 'html5video',
					html5video: {
						autoplay: true,
						muted: false
					},
					width: 1920,
					height: 1080
				}
			],
			{
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
			}
		);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="reveal-img video-container overflow-hidden rounded-xl md:rounded-3xl cursor-zoom-in"
	on:click={openLightbox}
	on:keydown={(e) => e.key === 'Enter' && openLightbox()}
	role="button"
	tabindex="0"
>
	{#if poster}
		<img src={poster} {alt} />
		<div class="play-overlay">
			<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.55)" />
				<polygon points="32,24 32,56 58,40" fill="#fff" />
			</svg>
		</div>
	{:else}
		<!-- Thumbnail video (autoplay, muted, loop) -->
		<!-- svelte-ignore a11y-media-has-caption -->
		<video src={thumb || src} autoplay loop muted playsinline {alt}></video>
	{/if}
</div>

<style>
	.video-container {
		position: relative;
		overflow: hidden;
	}

	.video-container video,
	.video-container img {
		width: 100%;
		height: auto;
		display: block;
		transition: transform 0.4s ease;
	}

	.video-container:hover video,
	.video-container:hover img {
		transform: scale(1.03);
	}

	.play-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		opacity: 0.85;
		transition: opacity 0.3s ease;
	}

	.video-container:hover .play-overlay {
		opacity: 1;
	}

	.play-overlay svg {
		width: 64px;
		height: 64px;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
		transition: transform 0.3s ease;
	}

	.video-container:hover .play-overlay svg {
		transform: scale(1.15);
	}
</style>
