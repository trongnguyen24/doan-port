<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { page } from '$app/stores';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import eco from '$lib/posts/eco.png?enhanced&format=webp&quality=70&w=560;1024';
	import futuristic from '$lib/posts/futuristic.png?enhanced&format=webp&quality=70&w=560;1024';
	import minimalist from '$lib/posts/minimalist.png?enhanced&format=webp&quality=70&w=560;1024';
	import retro from '$lib/posts/retro.png?enhanced&format=webp&quality=70&w=560;1024';
	import urban from '$lib/posts/urban.png?enhanced&format=webp&quality=70&w=560;1024';
	export let data;

	const modules = {
		eco: eco,
		futuristic: futuristic,
		minimalist: minimalist,
		retro: retro,
		urban: urban
	};

	if (modules[data.nextPost.image]) {
		data.nextPost.image2 = modules[data.nextPost.image];
	}

	// Duyệt qua mỗi đối tượng trong data.post
	data.posts.forEach((post) => {
		// Kiểm tra xem có module tương ứng với slug không
		if (modules[post.image]) {
			post.image2 = modules[post.image];
		}
	});

	data.posts = data.posts.filter((post) => post.slug !== $page.params.slug);

	onMount(() => {
		setTimeout(() => {
			document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
				let page = gsap.fromTo(
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

			const contentElements = [...document.querySelectorAll('.portfolio')];

			const totalContentElements = contentElements.length;

			// Function to handle scroll-triggered animations
			const scroll = () => {
				contentElements.forEach((el, position) => {
					const isLast = position === totalContentElements - 1;

					gsap
						.timeline({
							scrollTrigger: {
								trigger: el,
								start: 'top top',
								end: '+=80%',
								scrub: true
							}
						})
						.to(
							el,
							{
								ease: 'none',
								scale: isLast ? 1 : 0.7,
								opacity: isLast ? 1 : 0,
								yPercent: isLast ? 90 : 0
							},
							0
						);
				});
			};

			scroll();

			// let portfolio = gsap.utils.toArray('.portfolio');
			// let maxWidth = 0;
			// portfolio.forEach((item) => {
			// 	maxWidth += item.offsetWidth;
			// });

			// let tl = gsap
			// 	.timeline({
			// 		scrollTrigger: {
			// 			pin: '#portfolios',
			// 			end: () => `+=${maxWidth}`,
			// 			scrub: 1,
			// 			markers: false
			// 		}
			// 	})
			// 	.to('#portfolios', { x: () => `-${maxWidth - window.innerWidth}` });
		}, 1050);
	});
	afterNavigate(() => {
		disableScrollHandling;
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 1000);
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name={data.meta.description} content={data.meta.title} />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />
<div class="pb-24 md:pb-32">
	<svelte:component this={data.content} />
	<!-- <section
		class="nextproject flex gap-10 flex-col overflow-hidden items-center py-12 justify-center"
	>
		<div class="overflow-hidden flex max-w-80 relative">
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
		<div>
			<div scroll="reveal">
				<div class="px-10 max-w-[576px]">
					<a href="/portfolio/{data.nextPost.slug}" data-sveltekit-noscroll>
						<div class="reveal-img overflow-hidden rounded-3xl md:rounded-[3rem]">
							<div class="tranform hover:scale-[1.03] transition duration-700">
								<enhanced:img
									src={data.nextPost.image2}
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
			</div>
		</div>
	</section> -->
	<div class="overflow-hidden fadein container flex max-w-96 relative">
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
	<div id="portfolios" class="flex fadein flex-col items-center justify-center relative">
		<div class="flex justify-center items-center flex-col">
			{#each data.posts as item}
				<div
					class="max-w-[38rem] px-6 max-h-screen h-[80vh] portfolio top-0 flex justify-center items-center py-16 sticky"
				>
					<a href="/portfolio/{item.slug}" data-sveltekit-noscroll>
						<div class="reveal-img overflow-hidden rounded-3xl md:rounded-[3rem]">
							<div class="tranform hover:scale-[1.03] transition duration-700">
								<enhanced:img src={item.image2} alt={item.title} sizes="min(540px, 100vw)" />
							</div>
						</div>
						<div class="reveal-text pt-6">
							<h2 class="title-2 text-slate-900">{item.title}</h2>
							<p class="title-3 text-slate-500">{item.description}</p>
						</div>
					</a>
				</div>
			{/each}
			<div
				class="container bg-white max-w-7xl text-balance portfolio top-0 flex justify-center items-center h-screen sticky"
			>
				<div class=" relative flex justify-center z-10">
					<h1 class="title-1">Explore my journey in more detail by viewing my Curriculum Vitae.</h1>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <section class="overflow-hidden">
	<div id="portfolios" class="flex h-screen pb-24 items-center">
		<div class="flex">
			<div
				class="w-screen px-10 max-w-80 md:max-w-[576px] portfolio flex items-center justify-center flex-shrink-0"
			>
				<h2 class="title-1 text-slate-900"><MagicText text="Other Project"></MagicText></h2>
			</div>
			{#each data.posts as item}
				<div class="w-screen px-10 max-w-[576px] portfolio flex-shrink-0">
					<a href="/portfolio/{item.slug}" data-sveltekit-noscroll>
						<div class="reveal-img overflow-hidden rounded-3xl md:rounded-[3rem]">
							<div class="tranform hover:scale-[1.03] transition duration-700">
								<enhanced:img src={item.image2} alt={item.title} sizes="min(540px, 100vw)" />
							</div>
						</div>
						<div class="reveal-text pt-6">
							<h2 class="title-2 text-slate-900">{item.title}</h2>
							<p class="title-3 text-slate-500">{item.description}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section> -->

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
			transform: translateX(-25%);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
