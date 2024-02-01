<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import MagicText from '$lib/components/MagicText.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	import eco from '$lib/posts/eco.png?enhanced&format=webp&quality=70&w=560;1024';
	import futuristic from '$lib/posts/futuristic.png?enhanced&format=webp&quality=70&w=560;1024';
	import minimalist from '$lib/posts/minimalist.png?enhanced&format=webp&quality=70&w=560;1024';
	import retro from '$lib/posts/retro.png?enhanced&format=webp&quality=70&w=560;1024';
	import urban from '$lib/posts/urban.png?enhanced&format=webp&quality=70&w=560;1024';

	const modules = {
		eco: eco,
		futuristic: futuristic,
		minimalist: minimalist,
		retro: retro,
		urban: urban
	};

	export let data;

	// Duyệt qua mỗi đối tượng trong data.post
	data.posts.forEach((post) => {
		// Kiểm tra xem có module tương ứng với slug không
		if (modules[post.image]) {
			post.image2 = modules[post.image];
		}
	});

	onMount(() => {
		setTimeout(() => {
			document.querySelectorAll('[scroll="reveal"]').forEach((element) => {
				gsap.fromTo(
					element,
					{},
					{
						scrollTrigger: {
							trigger: element,
							start: 'top 100%-=60px', // when the top of the trigger hits the top of the viewport
							onEnter: () => element.classList.add('reveal'),
							markers: false
						}
					}
				);
			});
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
	<title>Portfolio</title>
	<meta name="Portfolio" content="Portfolio" />
</svelte:head>
<Gsapsetup />
<PageGsapRefresh />

<section class="max-w-screen-xl container py-10 md:py-28">
	<h1 class="title-1 font-medium fadein"><MagicText text="Portfolio" /></h1>

	<div class="md:pt-32 pt-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32">
		{#each data.posts as item}
			<div scroll="reveal" class="md:even:translate-y-24 md:odd:-translate-y-16">
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
</section>
