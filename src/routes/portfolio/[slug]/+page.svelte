<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	export let data;
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

	// Duyệt qua mỗi đối tượng trong data.post
	data.posts.forEach((post) => {
		// Kiểm tra xem có module tương ứng với slug không
		if (modules[post.image]) {
			post.image2 = modules[post.image];
		}
	});

	onMount(() => {
		// reveal on scroll
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
		}, 1000);

		gsap.to('.portfolio', {
			left: 1000,
			scrollTrigger: {
				trigger: '.portfolios',
				start: 'top top',
				end: 'top 50% ',
				markers: true
			}
		});
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
</div>
<section class="h-lvh relative overflow-hidden portfolios">
	<div class="grid portfolio grid-flow-col gap-24 absolute">
		{#each data.posts as item}
			<div scroll="reveal" class="w-96 flex-shrink-0">
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

<style>
</style>
