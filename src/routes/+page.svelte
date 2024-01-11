<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Hello from '$lib/components/Hello.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Gsapsetup />
<PageGsapRefresh />
<section>
	<div class="container mx-auto h-lvh flex items-center justify-center">
		<Hello />
	</div>
</section>

<style>
</style>
