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
