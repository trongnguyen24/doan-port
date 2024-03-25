<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '$lib/icon/index.svelte';
	import { spring } from 'svelte/motion';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import About from '$lib/components/resume/About.svelte';
	import Education from '$lib/components/resume/Education.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import References from '$lib/components/resume/References.svelte';
	import Skills from '$lib/components/resume/Skills.svelte';
	import IconAbout from '$lib/icon/iconAbout.svelte';
	import IconEducation from '$lib/icon/iconEducation.svelte';
	import IconExperience from '$lib/icon/iconExperience.svelte';
	import IconReferences from '$lib/icon/iconReferences.svelte';
	import IconSkills from '$lib/icon/iconSkills.svelte';
	import IconDownload from '$lib/icon/iconDownload.svelte';
	import Buttonsm from '$lib/components/Buttonsm.svelte';

	function fadeScale(node, { delay = 0, duration = 200, easing = (x) => x, baseScale = 0.95 }) {
		const o = +getComputedStyle(node).opacity;
		const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
		const s = m ? m[1] : 1;
		const is = 1 - baseScale;

		return {
			delay,
			duration,
			css: (t) => {
				const eased = easing(t);
				return `opacity: ${eased * o}; transform: scale(${eased * s * is + baseScale})`;
			}
		};
	}

	let pagecur = 'About';

	function switchPage(componentName) {
		pagecur = componentName;
	}

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
		updateCoords(firstButton);

		function updateCoords(button) {
			if (button) {
				coords.set({
					activeBtXPos: button.offsetLeft,
					activeBtYPos: button.offsetTop,
					activeBtWidth: button.offsetWidth
				});
			}
		}

		function handleResize() {
			const activeButton = document.querySelector('.item-nav[active="true"]');
			updateCoords(activeButton);
		}

		window.addEventListener('resize', handleResize);
	});
</script>

<OpenGraph title="My CV" />

<Gsapsetup />
<PageGsapRefresh />
<section class="col-span-1 pt-12 pb-28 md:py-28 col-start-1 min-h-screen">
	<div class=" max-w-screen-lg fadein container">
		<div class="flex items-center justify-between">
			<h1 class="title-1 font-medium fadein"><MagicText text="My CV" /></h1>
			<Buttonsm link="" text="Download CV"></Buttonsm>
		</div>

		<div class="grid md:grid-cols-[14rem_auto] relative items-start md:flex-row gap-10 pt-10">
			<div
				class="resume-nav py-4 md:sticky md:top-6 title-3 grid grid-cols-2 md:grid-cols-1 gap-3 text-gray-900 font-medium"
			>
				<div class="">
					<button
						class="md:text-lg flex gap-2 text-base md:gap-3 items-center item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
						active="true"
						on:click={() => switchPage('About')}
						on:click={handleClick}
					>
						<IconAbout />
						About</button
					>
				</div>
				<div class="">
					<button
						class="md:text-lg flex gap-2 text-base md:gap-3 items-center item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
						on:click={() => switchPage('Experience')}
						on:click={handleClick}
					>
						<IconExperience />
						Experience</button
					>
				</div>
				<div class=" ">
					<button
						class="md:text-lg flex gap-2 text-base md:gap-3 items-center item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
						on:click={() => switchPage('Education')}
						on:click={handleClick}
					>
						<IconEducation />
						Education</button
					>
				</div>
				<div>
					<button
						class="md:text-lg flex gap-2 text-base md:gap-3 items-center item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
						on:click={() => switchPage('Skills')}
						on:click={handleClick}
					>
						<IconSkills />
						Skills</button
					>
				</div>
				<div>
					<button
						class="md:text-lg flex gap-2 text-base md:gap-3 items-center item-nav px-4 py-1 hover:text-violet-500 duration-300 transition-colors"
						on:click={() => switchPage('References')}
						on:click={handleClick}
					>
						<IconReferences />
						References</button
					>
				</div>

				<span
					style="width: {$coords.activeBtWidth}px; left: {$coords.activeBtXPos}px; top: {$coords.activeBtYPos}px"
					class="absolute -z-10 active-bt h-8 md:h-9 w-16 rounded-full pointer-events-none border border-violet-100 bg-violet-50"
				></span>
			</div>

			<div class="grid grid-cols-[1fr]">
				{#if pagecur === 'About'}
					<div
						class="row-start-1 col-start-1 inline-grid transform-gpu"
						in:fadeScale={{ delay: 310, duration: 300, baseScale: 1.05 }}
						out:fadeScale={{ duration: 300 }}
					>
						<About />
					</div>
				{:else if pagecur === 'Experience'}
					<div
						class="row-start-1 col-start-1 inline-grid transform-gpu"
						in:fadeScale={{ delay: 310, duration: 300, baseScale: 1.05 }}
						out:fadeScale={{ duration: 300 }}
					>
						<Experience />
					</div>
				{:else if pagecur === 'Education'}
					<div
						class="row-start-1 col-start-1 inline-grid transform-gpu"
						in:fadeScale={{ delay: 310, duration: 300, baseScale: 1.05 }}
						out:fadeScale={{ duration: 300 }}
					>
						<Education />
					</div>
				{:else if pagecur === 'Skills'}
					<div
						class="row-start-1 col-start-1 inline-grid transform-gpu"
						in:fadeScale={{ delay: 310, duration: 300, baseScale: 1.05 }}
						out:fadeScale={{ duration: 300 }}
					>
						<Skills />
					</div>
				{:else if pagecur === 'References'}
					<div
						class="row-start-1 col-start-1 inline-grid transform-gpu"
						in:fadeScale={{ delay: 310, duration: 300, baseScale: 1.05 }}
						out:fadeScale={{ duration: 300 }}
					>
						<References />
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.item-nav[active='true'] {
		color: #8b5cf6;
	}
</style>
