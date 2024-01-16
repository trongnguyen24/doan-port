<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	let index = 0,
		interval = 1000;

	const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	onMount(() => {
		const animate = (star) => {
			star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
			star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

			star.style.animation = 'none';
			star.offsetHeight;
			star.style.animation = '';
		};

		for (const star of document.getElementsByClassName('magic-star')) {
			setTimeout(
				() => {
					animate(star);

					setInterval(() => animate(star), 1600);
				},
				index++ * (interval / 3)
			);
		}
	});
</script>

<div class="flex h-svh pb-12 container w-full flex-col justify-center md:gap-6 items-center gap-24">
	<div class="flex gap-6 flex-col">
		<div class="grid grid-cols-[1fr] max-w-md w-full mx-auto">
			{#each Array(24) as _, i}
				<svg
					class="hello__svg row-start-1 col-start-1 stroke-violet-400"
					style="animation-delay:{1.1 + i * 0.007}s"
					viewBox="0 0 1230.94 414.57"
				>
					<path
						d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
						transform="translate(311.08 476.02)"
						style="stroke-width:{24 + i * 0.5}"
					/>
				</svg>
			{/each}
		</div>
		<h1 class="textfadein text-center font-light title-1 text-gray-500 text-balance">
			I'm <span class=" font-medium text-gray-700">Doan</span> an
			<span class="magic">
				<span class="magic-star">
					<svg viewBox="0 0 512 512">
						<path
							d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
						/>
					</svg>
				</span>
				<span class="magic-star">
					<svg viewBox="0 0 512 512">
						<path
							d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
						/>
					</svg>
				</span>
				<span class="magic-star">
					<svg viewBox="0 0 512 512">
						<path
							d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
						/>
					</svg>
				</span>
				<span class="magic-text font-medium">amazing designer</span>
			</span>
			based in England
		</h1>
	</div>
	<div class="textfadein text-center"><Button text="MY PORTFOLIO" link="/work" /></div>
</div>

<style>
	:root {
		--purple: #a855f7;
		--violet: #8b5cf6;
		--pink: #f9a8d4;
	}
	.hello__svg {
		stroke-dasharray: 5800px;
		stroke-dashoffset: 5800px;
		fill: none;
		stroke-linecap: round;
		stroke-miterlimit: 10;
		animation-name: anim__hello;
		animation-duration: 3.6s;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}
	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}

	@keyframes scale {
		from,
		to {
			transform: scale(0);
		}

		50% {
			transform: scale(1);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(180deg);
		}
	}

	@keyframes line-rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes anim__hello {
		0% {
			stroke-dashoffset: 5800;
		}
		25% {
			stroke-dashoffset: 5800;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}

	h1 > .magic {
		display: inline-block;
		position: relative;
	}

	h1 > .magic > .magic-star {
		--size: clamp(1rem, 1.5vw, 1.4rem);

		animation: scale 700ms ease forwards;
		display: block;
		height: var(--size);
		left: var(--star-left);
		position: absolute;
		top: var(--star-top);
		width: var(--size);
	}

	h1 > .magic > .magic-star > svg {
		animation: rotate 1200ms linear infinite;
		display: block;
		opacity: 0.7;
	}

	h1 > .magic > .magic-star > svg > path {
		fill: var(--violet);
	}
	h1 > .magic > .magic-text {
		animation: background-pan 3s linear infinite;
		background: linear-gradient(to right, var(--purple), var(--violet), var(--pink), var(--purple));
		background-size: 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}

	.textfadein {
		opacity: 0;
		animation: 0.5s fadeIn 4.4s ease-in forwards;
	}
</style>
