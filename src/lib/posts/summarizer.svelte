<script context="module">
	export const metadata = {
		title: 'Summarizerrrr',
		description: 'Browser extension for summarizing web pages, youtube videos, Udemy, Coursera.',
		date: '2023-10-12',
		image: 'summarizer',
		published: true,
		backgroundColor: '#11111A',
		darkMode: true
	};
</script>

<script>
	import Section from '$lib/mdstyle/Section.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Title from '$lib/mdstyle/Title.svelte';
	import Text from '$lib/mdstyle/Text.svelte';
	import Image from '$lib/mdstyle/Image.svelte';
	import { get } from 'svelte/store';
	import { isDarkMode } from '$lib/stores/darkMode';

	function openVideo() {
		const dark = get(isDarkMode);
		Fancybox.show(
			[
				{
					src: 'https://www.youtube.com/watch?v=pRZvPWjbJ4c',
					type: 'iframe'
				}
			],
			{
				mainClass: dark ? 'fancybox-dark' : '',
				Thumbs: false,
				Carousel: { Navigation: false },
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

<Title>
	{metadata.title}
</Title>

<Section>
	<Block size="2" mobile="4">
		<Text
			>Summarizerrrr is a browser extension for summarizing web pages, youtube videos, Udemy,
			Coursera.
		</Text>
	</Block>
</Section>

<Section>
	<Block>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="video-thumb"
			on:click={openVideo}
			on:keydown={(e) => e.key === 'Enter' && openVideo()}
			role="button"
			tabindex="0"
		>
			<enhanced:img
				src="$lib/posts/summarizer/00.jpg?format=webp&quality=98"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div class="play-overlay">
				<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.55)" />
					<polygon points="32,24 32,56 58,40" fill="#fff" />
				</svg>
			</div>
		</div>
	</Block>
</Section>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>Tendril was invited to create a launch film and flexible visual system to highlight and
			envision Microsoft's new Windows 365 Cloud PC platform and its possibilities.
		</Text>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/summarizer/1.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/summarizer/1.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="3" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/summarizer/2.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/summarizer/2.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="4" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/summarizer/3.jpg?format=webp&quality=95&w=1392;1800"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/summarizer/3.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="3" mobile="4">
		<Image>
			<img
				src="/posts/summarizer/4.webp"
				alt={metadata.title}
				style="width:100%;height:auto;"
			/>
			<div slot="fullres">
				<img
					src="/posts/summarizer/4.webp"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<style>
	.video-thumb {
		position: relative;
		overflow: hidden;
		border-radius: 0.75rem;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.video-thumb {
			border-radius: 1.5rem;
		}
	}

	.video-thumb :global(img) {
		width: 100%;
		height: auto;
		display: block;
		transition: transform 0.4s ease;
	}

	.video-thumb:hover :global(img) {
		transform: scale(1.03);
	}

	.play-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		transition: opacity 0.3s ease;
	}

	.play-overlay svg {
		width: 80px;
		height: 80px;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
		transition: transform 0.3s ease;
	}

	.video-thumb:hover .play-overlay svg {
		transform: scale(1.15);
	}
</style>
