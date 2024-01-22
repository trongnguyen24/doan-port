<script context="module">
	export const metadata = {
		title: 'Retro Café Revival',
		description: 'Blend of retro and modern café style.',
		date: '2023-10-12',
		image: 'retro',
		published: true
	};
</script>

<script>
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import Blocks from '$lib/mdstyle/Blocks.svelte';
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
