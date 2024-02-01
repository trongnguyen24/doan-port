<script context="module">
	import Ferrumpipe from './eco-friendly-workspace.svelte';

	export const metadata = {
		title: 'Urban Oasis',
		description: 'Modern urban garden in a city setting.',
		date: '2023-05-15',
		image: 'urban',
		published: true
	};
</script>

<script>
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import Section from '$lib/mdstyle/Section.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Title from '$lib/mdstyle/Title.svelte';
	import Text from '$lib/mdstyle/Text.svelte';
	import Image from '$lib/mdstyle/Image.svelte';
</script>

<Gsapsetup />
<PageGsapRefresh />

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
