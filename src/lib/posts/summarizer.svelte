<script context="module">
	export const metadata = {
		title: 'Summarizerrrr',
		description: 'Browser extension for summarizing web pages, youtube videos, Udemy, Coursera.',
		date: '2023-10-12',
		image: 'summarizer',
		published: true,
		backgroundColor: '#0f172a',
		darkMode: true
	};
</script>

<script>
	import Section from '$lib/mdstyle/Section.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Title from '$lib/mdstyle/Title.svelte';
	import Text from '$lib/mdstyle/Text.svelte';
	import Image from '$lib/mdstyle/Image.svelte';
</script>

<Title>
	{metadata.title}
</Title>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>Tendril was invited to create a launch film and flexible visual system to highlight and
			envision Microsoft’s new Windows 365 Cloud PC platform and its possibilities.
		</Text>
	</Block>
</Section>

<Section>
	<Block>
		<Image>
			<enhanced:img
				src="$lib/posts/summarizer/00.jpg?format=webp&quality=98"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/summarizer/00.jpg?format=webp&quality=98"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>
