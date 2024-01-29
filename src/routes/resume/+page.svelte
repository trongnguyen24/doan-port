<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import About from '$lib/components/resume/About.svelte';

	let nav = [
		{ name: 'About', url: 1 },
		{ name: 'Experience', url: 2 },
		{ name: 'Education', url: 3 },
		{ name: 'Skill', url: 4 },
		{ name: 'References', url: 5 }
	];

	let coords = spring(
		{ activeBtXPos: 0, activeBtYPos: 0, activeBtWidth: 82 },
		{
			stiffness: 0.012,
			damping: 0.16
		}
	);

	function handleClick(event) {
		document.querySelectorAll('.item-nav').forEach((button) => {
			button.removeAttribute('active');
		});

		const button = event.target;
		button.setAttribute('active', 'true');

		coords.set({
			activeBtXPos: button.offsetLeft,
			activeBtYPos: button.offsetTop, // Assuming you need the Y position
			activeBtWidth: button.offsetWidth
		});
	}

	onMount(() => {
		const firstButton = document.querySelector('.item-nav[active="true"]');
		if (firstButton) {
			coords.set({
				activeBtXPos: firstButton.offsetLeft,
				activeBtYPos: firstButton.offsetTop,
				activeBtWidth: firstButton.offsetWidth
			});
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />
<section class=" max-w-screen-md container py-10 md:py-28">
	<h1 class="title-1 font-medium fadein"><MagicText text="Resume" /></h1>
	<div class="grid gap-10 py-10">
		<div
			class="resume-nav grid-cols-2 grid sm:flex gap-3 md:gap-4 relative flex-wrap text-gray-900"
		>
			<div class=" w-1/2 sm:w-auto">
				<button
					class="text-lg item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
					active="true"
					on:click={handleClick}>About</button
				>
			</div>
			<div class=" w-1/2 sm:w-auto">
				<button
					class="text-lg item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
					on:click={handleClick}>Experience</button
				>
			</div>
			<div class=" w-1/2 sm:w-auto">
				<button
					class="text-lg item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
					on:click={handleClick}>Education</button
				>
			</div>
			<div class=" w-1/2 sm:w-auto">
				<button
					class="text-lg item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
					on:click={handleClick}>Skill</button
				>
			</div>
			<div class=" w-1/2 sm:w-auto">
				<button
					class="text-lg item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
					on:click={handleClick}>References</button
				>
			</div>
			<span
				style="width: {$coords.activeBtWidth}px; left: {$coords.activeBtXPos}px; top: {$coords.activeBtYPos}px"
				class="absolute -z-10 active-bt h-9 w-16 rounded-full pointer-events-none border border-violet-100 bg-violet-50"
			></span>
		</div>
	</div>
	<div>
		<About />
	</div>
</section>

<style>
	.item-nav[active='true'] {
		@apply hover:text-violet-500 text-violet-500;
	}
</style>
