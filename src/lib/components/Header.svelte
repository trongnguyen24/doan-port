<script>
	import Icon from '$lib/icon/index.svelte';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

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
		}, 400); // Thời gian của animation
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
	});

	let nav = [
		{
			icon: 'home',
			name: 'Home'
		},
		{
			icon: 'work',
			name: 'Work'
		},
		{
			icon: 'resume',
			name: 'Resume'
		}
		// {
		// 	icon: 'contact',
		// 	name: 'Contact'
		// }
	];
</script>

<nav>
	<ul
		id="cards"
		class=" flex gap-2 p-2 fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[rgb(251,251,253)] bg-opacity-85 backdrop-blur-xl rounded-full border border-solid border-[#EEEEF1] shadow-2xl"
	>
		{#each nav as nav, i (i)}
			<a
				href="#1"
				on:click={(e) => coords.set({ x: 32 + i * 56 })}
				on:click={handleClick}
				class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			>
				<li
					class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center"
				>
					<Icon name={nav.icon} />
					<div class="size-12 shine absolute pointer-events-none"></div>
				</li>
			</a>
		{/each}

		<a href="#1" class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative">
			<li
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center"
			>
				<Icon name="contact" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</li>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg class="absolute w-full h-full top-0 left-0 z-0">
			<circle cx={$coords.x} cy="60" r="2" fill="#6B6B70" />
		</svg>
	</ul>
</nav>

<style>
	.card li {
		z-index: 2;
	}
	.card .shine {
		background-image: linear-gradient(
			135deg,
			rgba(107, 107, 112, 0.15) 0%,
			rgba(107, 107, 112, 0) 38.92%,
			rgba(107, 107, 112, 0) 61.08%,
			rgba(107, 107, 112, 0.15) 100%
		);
		background-position: center;
		background-size: 130% 100%;
	}
	#cards:hover > .card::after {
		opacity: 1;
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

	.card::after {
		background: radial-gradient(
			4rem circle at var(--mouse-x) var(--mouse-y),
			rgb(206, 206, 210),
			transparent 100%
		);
		z-index: 1;
	}
</style>
