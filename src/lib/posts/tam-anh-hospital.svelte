<script context="module">
	export const metadata = {
		title: 'Tam Anh Hospital',
		description: 'Internal systems, digital interfaces, and healthcare UX improvements.',
		date: '2023-12-01',
		image: 'tam-anh',
		published: true,
		backgroundColor: '#E6F1FF',
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
				src="$lib/posts/tam-anh-hospital/ta-1.png?format=webp&quality=98"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/ta-1.png?format=webp&quality=98"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" position="2" mobile="4">
		<Text
			>{$_('posts.tam_anh.text1')}
		</Text>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/1.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/1.jpg?format=webp&quality=95"
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
				src="$lib/posts/tam-anh-hospital/2.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/2.jpg?format=webp&quality=95"
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
				src="$lib/posts/tam-anh-hospital/3.jpg?format=webp&quality=95&w=1392;1800"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/3.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Text
			>{$_('posts.tam_anh.text2')}
		</Text>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/4.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/4.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/5.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/5.jpg?format=webp&quality=95"
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
				src="$lib/posts/tam-anh-hospital/6.jpg?format=webp&quality=95&w=1392;1800"
				sizes="min(1392px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/6.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="3" position="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/7.jpg?format=webp&quality=95&w=1036;1600"
				sizes="min(1036px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/7.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>

<Section>
	<Block size="2" position="3" mobile="4">
		<Text
			>{$_('posts.tam_anh.text3')}
		</Text>
	</Block>
</Section>

<Section>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/8.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/8.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
	<Block size="2" mobile="4">
		<Image>
			<enhanced:img
				src="$lib/posts/tam-anh-hospital/9.jpg?format=webp&quality=95&w=680;1360"
				sizes="min(680px, 100vw)"
				alt={metadata.title}
			/>
			<div slot="fullres">
				<enhanced:img
					src="$lib/posts/tam-anh-hospital/9.jpg?format=webp&quality=95"
					alt={metadata.title}
				/>
			</div>
		</Image>
	</Block>
</Section>
