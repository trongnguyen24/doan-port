<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Gsapsetup />
<PageGsapRefresh />
<section>
	<h1 class="text-2xl">Home</h1>
	<p class=" py-80">This is the home page</p>
	<p class=" py-80">This is the home page</p>
	<p class=" py-80">This is the home page</p>
	<p class=" py-80">This is the home page</p>
	<p class=" py-80">This is the home page</p>
</section>
