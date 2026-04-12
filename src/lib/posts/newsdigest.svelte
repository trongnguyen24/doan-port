<script context="module">
	export const metadata = {
		title: 'NewsDigest',
		description: 'AI-powered daily tech news aggregator with Gemini AI summarization.',
		date: '2023-09-05',
		image: 'newsdigest',
		published: true,
		backgroundColor: '#EAE7E0',
		darkMode: false
	};
</script>

<script>
	import Section from '$lib/mdstyle/Section.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Title from '$lib/mdstyle/Title.svelte';
	import Text from '$lib/mdstyle/Text.svelte';
	import Image from '$lib/mdstyle/Image.svelte';
	import { _ } from 'svelte-i18n';
</script>

<Section>
	<Block>
		<Title>
			{metadata.title}
		</Title>
	</Block>
</Section>

<Section>
	<Block>
		<Image>
			<enhanced:img
				src="$lib/posts/newsdigest/00.jpg?format=webp&quality=98"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/newsdigest/00.jpg?format=webp&quality=98"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>{$_('posts.newsdigest.text1')}
		</Text>
		<br />
		<Text
			>{$_('posts.newsdigest.text2')}
			<br />
			<a
				href="https://newsdigest.pages.dev/"
				target="_blank"
				rel="noopener noreferrer"
				class="visit-btn"
			>
				{$_('posts.newsdigest.visit')}
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
		</Text>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/newsdigest/1.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/newsdigest/1.jpg?format=webp&quality=95"
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
				src="$lib/posts/newsdigest/2.jpg?format=webp&quality=95&w=1392;1800"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/newsdigest/2.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/newsdigest/3.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/newsdigest/3.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/newsdigest/4.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/newsdigest/4.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<style>
	.visit-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1.25rem;
		padding: 0.6rem 1.4rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 999px;
		color: rgba(0, 0, 0, 0.7);
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.25s ease;
		backdrop-filter: blur(4px);
		background: rgba(0, 0, 0, 0.04);
	}

	.visit-btn:hover {
		background: rgba(0, 0, 0, 0.1);
		border-color: rgba(0, 0, 0, 0.4);
		color: #000;
	}

	.visit-btn svg {
		transition: transform 0.25s ease;
	}

	.visit-btn:hover svg {
		transform: translate(2px, -2px);
	}
</style>
