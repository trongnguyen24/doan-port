<script context="module">
	export const metadata = {
		title: 'Futuristic Exhibition Space',
		description: 'Innovative, futuristic exhibition design.',
		date: '2023-12-01',
		image: 'futuristic',
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
				src="$lib/images/01/1.jpg?format=webp&quality=90&w=900;1440"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

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

<Section>
	<Block size="2" mobile="4">
		<Text
			>The film takes us on a journey of discovering this new platform, the features and
			possibilities of the Cloud and the familiar Windows experience available at the user’s
			fingertips. Imagine the possibilities of having access to a totally configurable and powerful
			PC that can be streamed effortlessly to any device, anywhere. Ease, fluidity, security, and
			power were all characteristics that needed to be expressed through our designs.
		</Text>
	</Block>
</Section>

<Section>
	<Block>
		<Image>
			<enhanced:img
				src="$lib/images/01/4.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(1440px, 100vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="3" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/images/01/5.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(720px, 50vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/images/01/6.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(720px, 50vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" position="3" mobile="4">
		<Text
			>We sought to make a clear, informative film that expressed these new features while
			maintaining an abstract, beautiful world. We wanted to avoid obvious visual metaphors but
			still convey some sense of cloud-like qualities. The end result is a visualization of the
			experience of using Windows Cloud PC in a way that feels exciting and fresh but also familiar
			and not too abstract.
		</Text>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/images/01/7.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(400px, 50vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/images/01/8-a.jpg?format=webp&quality=90&w=900;1440"
				sizes="min(400px, 50vw)"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>
