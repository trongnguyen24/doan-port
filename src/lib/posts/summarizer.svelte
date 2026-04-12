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
	import Video from '$lib/mdstyle/Video.svelte';
	import { _ } from 'svelte-i18n';
</script>

<Title>
	{metadata.title}
</Title>

<Section>
	<Block size="3" mobile="4">
		<Text
			>{$_('posts.summarizer.text1')}
		</Text>
		<a
			href="https://summarizerrrr.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="visit-btn"
		>
			{$_('posts.summarizer.visit')}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg
			>
		</a>
		<a
			href="https://github.com/trongnguyen24/Summarizerrrr"
			target="_blank"
			rel="noopener noreferrer"
			class="visit-btn"
		>
			GitHub
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="currentColor"
				><path
					d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
				/></svg
			>
		</a>
	</Block>
</Section>

<Section>
	<Block>
		<Video
			poster="/posts/summarizer/00.jpg"
			src="/posts/summarizer/mp4/summarizer.webm"
			alt="Summarizerrrr Demo"
		/>
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
			<img src="/posts/summarizer/4.webp" alt={metadata.title} style="width:100%;height:auto;" />
			<div slot="fullres">
				<img src="/posts/summarizer/4.webp" alt={metadata.title} />
			</div>
		</Image>
	</Block>
</Section>
<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>{$_('posts.summarizer.text2')}
		</Text>
	</Block>
</Section>
<Section>
	<Block size="4" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/summarizer/5.jpg?format=webp&quality=95&w=1392;1800"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/summarizer/5.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="4" mobile="4">
		<Video
			thumb="/posts/summarizer/mp4/ios2-thumb.webm"
			src="/posts/summarizer/mp4/ios2.webm"
			alt="iOS Demo"
		/>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Video
			thumb="/posts/summarizer/mp4/dia-thumb.webm"
			src="/posts/summarizer/mp4/Dia.webm"
			alt="Dia Demo"
		/>
	</Block>
	<Block size="2" mobile="4">
		<Video
			thumb="/posts/summarizer/mp4/GoogleChrome-thumb.webm"
			src="/posts/summarizer/mp4/GoogleChrome.webm"
			alt="Chrome Extension Demo"
		/>
	</Block>
</Section>

<style>
	.visit-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1.25rem;
		padding: 0.6rem 1.4rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 999px;
		color: rgba(255, 255, 255, 0.85);
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.25s ease;
		backdrop-filter: blur(4px);
		background: rgba(255, 255, 255, 0.06);
	}

	.visit-btn:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.4);
		color: #fff;
	}

	.visit-btn svg {
		transition: transform 0.25s ease;
	}

	.visit-btn:hover svg {
		transform: translate(2px, -2px);
	}
</style>
