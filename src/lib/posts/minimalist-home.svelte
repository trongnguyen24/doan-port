<script context="module">
	export const metadata = {
		title: 'Minimalist Home',
		description: 'Simple, elegant interior design.',
		date: '2023-07-20',
		image: 'minimalist',
		published: true
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

<Title>
	{metadata.title}
</Title>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>{$_('posts.minimalist.text1')}
		</Text>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/images/01/2.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(720px, 70vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="31">
		<Image>
			<enhanced:img
				src="$lib/images/01/3-a.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(400px, 100vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
	<Block size="2" mobile="32">
		<Image>
			<enhanced:img
				src="$lib/images/01/3b.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(400px, 100vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>
