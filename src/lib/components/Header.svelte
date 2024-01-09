<script>
	import Icon from '$lib/icon/index.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('card')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
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
		},
		{
			icon: 'contact',
			name: 'Contact'
		}
	];
</script>

<nav>
	<ul
		id="cards"
		class=" flex gap-2 p-2 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[rgb(251,251,253)] bg-opacity-85 backdrop-blur-xl rounded-full border border-solid border-[#EEEEF1] shadow-2xl"
	>
		{#each nav as nav}
			<li class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative">
				<a
					class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center"
					href="#1"
					><Icon name={nav.icon} />
					<div class="size-12 shine absolute pointer-events-none"></div></a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.card a {
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
