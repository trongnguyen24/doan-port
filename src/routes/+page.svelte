<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Hello from '$lib/components/Hello.svelte';
	import Jumbo from '$lib/components/jumbo.svelte';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
</script>

<OpenGraph />

<PageGsapRefresh />
<Hello />

<Jumbo />

<style>
</style>
