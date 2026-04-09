<script context="module">
	export const metadata = {
		title: 'Tam Anh Hospital',
		description: 'Internal systems, digital interfaces, and healthcare UX improvements.',
		date: '2023-12-01',
		image: 'tam-anh',
		published: true
	};
</script>

<script>
	import Section from '$lib/mdstyle/Section.svelte';
	import Block from '$lib/mdstyle/Block.svelte';
	import Title from '$lib/mdstyle/Title.svelte';
	import Text from '$lib/mdstyle/Text.svelte';
	import Image from '$lib/mdstyle/Image.svelte';
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
				src="$lib/images/01/ta-1.png?format=webp&quality=90&w=900;1440"
				alt={metadata.title}
			/>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>At Tam Anh General Hospital, I was involved in the design and development of digital
			interface systems to support internal operations and enhance the patient experience.
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
			>The work included building appointment management interfaces, patient information display
			systems, and tools to streamline the examination and treatment process. The goal was to create
			smooth, user-friendly digital experiences for both medical staff and patients.
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
			>The design focused on clarity, professionalism, and healthcare-appropriate aesthetics —
			ensuring visual quality while prioritizing functionality and performance. The result was a
			suite of digital products that helped optimize hospital workflows.
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
