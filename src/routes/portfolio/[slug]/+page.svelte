<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import { getPostComponent, previewImages } from '$lib/posts';

	export let data;

	$: PostContent = getPostComponent(data.post.slug);

	onMount(() => {
		setTimeout(() => {
			document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
				gsap.fromTo(
					element,
					{},
					{
						scrollTrigger: {
							trigger: element,
							start: 'top 100%-=80px', // when the top of the trigger hits the top of the viewport
							onEnter: () => element.classList.add('reveal'),
							markers: false
						}
					}
				);
			});
		}, 1050);
	});
</script>

<OpenGraph title={data.post.title} description={data.post.description} />

<PageGsapRefresh />

<div class="py-10 md:py-28">
	<div class="fadein">
		<svelte:component this={PostContent} />
	</div>

	<div id="portfolios" class="flex fadein flex-col pt-10 items-center justify-center">
		<div class="overflow-hidden fadein container flex my-8 max-w-96 relative">
			<div side="left" class="horizontalFade"></div>
			<div side="right" class="horizontalFade"></div>
			<div class="moveLeft shrink-0 flex justify-center items-center">
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text="Next project" />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text="Next project" />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text="Next project" />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text="Next project" />
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center gap-8 pb-20 flex-col">
			<div class="max-w-[38rem] px-6 max-h-[46rem] portfolio flex justify-center items-center">
				<a href="/portfolio/{data.nextPost.slug}" data-sveltekit-noscroll>
					<div class="reveal-img overflow-hidden rounded-3xl md:rounded-[3rem]">
						<div class="tranform hover:scale-[1.03] transition duration-700">
							<enhanced:img
								src={previewImages[data.nextPost.image]}
								alt={data.nextPost.title}
								sizes="min(540px, 100vw)"
							/>
						</div>
					</div>
					<div class="reveal-text pt-6">
						<h2 class="title-2 text-slate-900">{data.nextPost.title}</h2>
						<p class="title-3 text-slate-500">{data.nextPost.description}</p>
					</div>
				</a>
			</div>

			<!-- <div
				class="container bg-white max-w-5xl text-center text-balance portfolio top-0 flex justify-center items-center"
			>
				<div class="flex flex-col gap-8 justify-center">
					<h1 class="title-2 sm:title-1">
						Explore my journey in more detail by viewing <MagicText text="my CV" />.
					</h1>
					<Button text="See the CV" link="/cv"></Button>
				</div>
			</div> -->
		</div>
	</div>
</div>

<style>
	.horizontalFade {
		@apply absolute inset-y-0 w-24 z-10;
		-webkit-backdrop-filter: blur(2px);
		backdrop-filter: blur(2px);
	}
	.horizontalFade[side='left'] {
		background: linear-gradient(to right, white 10%, transparent);
		left: 0;
		-webkit-mask-image: linear-gradient(to right, #fcfcfc 25%, transparent);
		mask-image: linear-gradient(to right, #fcfcfc 25%, transparent);
	}
	.horizontalFade[side='right'] {
		background: linear-gradient(to left, white 10%, transparent);
		right: 0;
		-webkit-mask-image: linear-gradient(to right, #fcfcfc 25%, transparent);
		mask-image: linear-gradient(to left, #fcfcfc 25%, transparent);
	}
	.moveLeft {
		animation: moveLeft 6s linear infinite;
	}

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}
	@keyframes moveLeft {
		from {
			transform: translateX(-0%);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
