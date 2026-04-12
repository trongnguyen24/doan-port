<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { gsap } from 'gsap';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import MagicText from '$lib/components/MagicText.svelte';
	import { getPostComponent, previewImages } from '$lib/posts';
	import { isDarkMode } from '$lib/stores/darkMode';
	import { _ } from 'svelte-i18n';

	export let data;

	const slugToI18nKey = {
		'newsdigest': 'newsdigest',
		'summarizer': 'summarizer',
		'tam-anh-hospital': 'tam_anh',
		'minimalist-home': 'minimalist'
	};

	$: PostContent = getPostComponent(data.post.slug);
	$: isDark = data.post.darkMode === true;
	$: bgColor = data.post.backgroundColor || '';
	$: nextI18nKey = slugToI18nKey[data.nextPost?.slug] || data.nextPost?.slug;

	let bgTimer;

	// Reactively apply background color to body when bgColor changes
	// Delayed to sync with the page transition (old page out:fade = 800ms)
	$: if (typeof document !== 'undefined') {
		clearTimeout(bgTimer);
		const newBg = bgColor || '';
		const newDark = isDark;
		bgTimer = setTimeout(() => {
			document.body.style.transition = 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
			document.body.style.backgroundColor = newBg;
			isDarkMode.set(newDark);
		}, 800);
	}

	// Reset background when navigating AWAY from portfolio pages.
	// For portfolio-to-portfolio navigation, the new page's reactive $: handles the update.
	// Using beforeNavigate instead of onDestroy to avoid race conditions with {#key} transitions.
	beforeNavigate(({ to }) => {
		if (!to?.url.pathname.startsWith('/portfolio/')) {
			document.body.style.transition = 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
			document.body.style.backgroundColor = '';
			isDarkMode.set(false);
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
							start: 'top 100%-=80px',
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

<div class="post-page py-10 md:py-28" class:dark-mode={isDark} style={bgColor ? `--post-bg: ${bgColor}` : ''}>
	<div class="fadein">
		<svelte:component this={PostContent} />
	</div>

	<div id="portfolios" class="flex fadein flex-col pt-10 items-center justify-center">
		<div class="marquee-container overflow-hidden fadein container flex my-8 max-w-96 relative">
			<div class="moveLeft shrink-0 flex justify-center items-center">
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text={$_('portfolio.next_project')} />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text={$_('portfolio.next_project')} />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text={$_('portfolio.next_project')} />
				</div>
				<div class="text-content text-violet-400 shrink-0 px-6 py-4 title-2">
					<MagicText text={$_('portfolio.next_project')} />
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
								sizes="(min-width: 1024px) 38rem, (min-width: 768px) 50vw, 100vw"
							/>
						</div>
					</div>
					<div class="reveal-text pt-6">
						<h2 class="title-2 next-title">{$_(`posts.${nextI18nKey}.title`)}</h2>
						<p class="title-3 next-desc">{$_(`posts.${nextI18nKey}.description`)}</p>
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
	/* --- Marquee container: mask edges to transparent --- */
	.marquee-container {
		-webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
		mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
	}

	/* --- Next project text colors --- */
	.next-title {
		@apply text-slate-900;
		transition: color 0.4s ease;
	}
	.next-desc {
		@apply text-slate-500;
		transition: color 0.4s ease;
	}
	.dark-mode .next-title {
		@apply text-slate-100;
	}
	.dark-mode .next-desc {
		@apply text-slate-400;
	}

	/* --- Dark mode: override mdstyle text colors via global selectors --- */
	.dark-mode :global(.reveal-text.title-3.text-gray-600) {
		color: #d1d5db !important; /* gray-300 equivalent */
	}
	.dark-mode :global(.title-1.font-medium.text-gray-900) {
		color: #f1f5f9 !important; /* slate-100 equivalent */
	}

	/* --- Animations --- */
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
