<script context="module">
	export const metadata = {
		title: 'Eco-friendly Workspace',
		description: 'Sustainable office design.',
		date: '2023-09-05',
		image: 'eco',
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
