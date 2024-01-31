<script>
	// @ts-nocheck

	import Icon from '$lib/icon/index.svelte';
	import gsap from 'gsap';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import * as Drawer from '$lib/components/ui/drawer';

	let coords = spring(
		{ x: 32 },
		{
			stiffness: 0.03,
			damping: 0.1991
		}
	);

	function handleClick(event) {
		const element = event.currentTarget;
		element.classList.add('animate-bounce-nav');
		setTimeout(() => {
			element.classList.remove('animate-bounce-nav');
		}, 550); // Thời gian của animation
	}

	onMount(() => {
		let isMobile = window.matchMedia('(pointer:coarse)').matches;
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('card')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;
				if (!isMobile) {
					card.style.setProperty('--mouse-x', `${x}px`);
					card.style.setProperty('--mouse-y', `${y}px`);
				}
			}
		};
		if (isMobile) {
			coords = spring(
				{ x: 32 },
				{
					stiffness: 0.03,
					damping: 0.16
				}
			);
		}

		let cards = document.getElementById('cards');
		let card = gsap.utils.toArray('.card');
		let dotnav = document.getElementsByClassName('nav-dot');
		let menutl = gsap.timeline({});
		menutl.set(cards, {
			width: '2rem',
			height: '1rem',
			y: '3rem',
			duration: 0
		});
		menutl.to(cards, {
			width: '4.125rem',
			height: '4.125rem',
			opacity: 1,
			y: '0',
			scale: 1,
			duration: 0.8
		});
		menutl.to(cards, {
			width: '14.5rem',
			duration: 1
		});
		menutl.to(card, {
			display: 'block',
			opacity: 1,
			stagger: 0.15,
			duration: 0.6
		});
		menutl.to(dotnav, {
			display: 'block',
			opacity: 1,
			duration: 0.3
		});
	});
</script>

<div
	id="cards"
	class="z-50 flex gap-2 p-2 fixed bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgb(251,251,253)] bg-opacity-90 backdrop-blur-xl rounded-full border border-solid border-[#EEEEF1] shadow-2xl"
>
	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Home</span
		>
		<a
			aria-current={$page.url.pathname === '/'
				? (coords.set({ x: 32 + 0 * 56 }), 'page')
				: undefined}
			href="/"
			on:click={(e) => coords.set({ x: 32 + 0 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Home"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="home" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Portfolio</span
		>
		<a
			aria-current={$page.url.pathname.includes('portfolio')
				? (coords.set({ x: 32 + 1 * 56 }), 'page')
				: undefined}
			href="/portfolio"
			on:click={(e) => coords.set({ x: 32 + 1 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Portfolio"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="work" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Cv</span
		>
		<a
			aria-current={$page.url.pathname === '/cv'
				? (coords.set({ x: 32 + 2 * 56 }), 'page')
				: undefined}
			href="/cv"
			on:click={(e) => coords.set({ x: 32 + 2 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Curriculum vitae"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="resume" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Contact</span
		>
		<button
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			aria-label="Contact"
		>
			<Drawer.Root>
				<Drawer.Trigger
					><div
						class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
					>
						<Icon name="contact" />
						<div class="size-12 shine absolute pointer-events-none"></div>
					</div>
				</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
						<Drawer.Description></Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<Drawer.Close>Cancel</Drawer.Close>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>
		</button>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg class="nav-dot absolute w-full h-full top-0 left-0 z-0 hidden opacity-0">
		<circle cx={$coords.x} cy="60" r="2" fill="#a78bfa" />
	</svg>
</div>

<style>
	#cards {
		opacity: 0;
	}
	.card {
		min-width: 3rem;
		aspect-ratio: 1;
		opacity: 0;
		display: none;
		@apply transition-colors duration-300 ease-in-out;
	}
	.card .li {
		z-index: 2;
		@apply transition-colors duration-300 ease-in-out;
	}
	.card .shine {
		background-image: linear-gradient(
			135deg,
			rgba(107, 107, 112, 0.19) 0%,
			rgba(107, 107, 112, 0) 38.92%,
			rgba(107, 107, 112, 0) 61.08%,
			rgba(107, 107, 112, 0.22) 100%
		);
		background-position: center;
		background-size: 130% 100%;
	}

	.card[aria-current='page'] .shine {
		background-image: linear-gradient(
			135deg,
			rgba(201, 147, 213, 0.25) 0%,
			rgba(110, 88, 115, 0) 38.92%,
			rgba(110, 88, 115, 0) 61.08%,
			rgba(201, 147, 213, 0.35) 100%
		);
		background-position: center;
		background-size: 130% 100%;
	}

	#cards:hover > .card::after {
		opacity: 1;
	}
	.card[aria-current='page'] {
		@apply bg-violet-50;
	}
	.card[aria-current='page'] .li {
		@apply bg-violet-50 text-violet-500;
	}
	.card:hover::before {
		opacity: 1;
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		pointer-events: none;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.card::before {
		background: radial-gradient(
			2rem circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.9),
			transparent 90%
		);
		z-index: 3;
	}

	.card[aria-current='page']::before {
		background: radial-gradient(
			2rem circle at var(--mouse-x) var(--mouse-y),
			rgba(252, 249, 255, 0.9),
			transparent 90%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			4rem circle at var(--mouse-x) var(--mouse-y),
			rgb(206, 206, 210),
			transparent 100%
		);
		z-index: 1;
	}

	.card[aria-current='page']::after {
		background: radial-gradient(
			4rem circle at var(--mouse-x) var(--mouse-y),
			rgb(228, 210, 255),
			transparent 100%
		);
		z-index: 1;
	}
</style>
