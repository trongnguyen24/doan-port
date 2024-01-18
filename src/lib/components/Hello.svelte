<script>
	// @ts-nocheck

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

<div class="flex h-svh pb-16 container w-full flex-col justify-center md:gap-6 items-center gap-8">
	<div class="flex gap-6 flex-col">
		<div class="grid grid-cols-[1fr] max-w-md w-full mx-auto">
			{#each Array(10) as _, i}
				<svg class="hello__svg row-start-1 col-start-1 stroke-violet-400" viewBox="0 0 482 167">
					<path
						class="path-1"
						style="stroke-width:{1 + i * 0.5}; animation-delay:{1.1 + i * 0.012}s"
						d="M7 84.8397C62.36 102.56 127.34 98.0297 172.86 61.8897C184.35 52.7697 194.67 41.4397 198.85 27.2397C199.75 24.1897 199.75 20.9097 198.57 17.9597C196.06 11.6597 190.78 11.4397 186.2 12.4597C172.66 15.4997 163.54 27.9397 156.57 39.9297C135.51 76.1497 122.43 116.35 109.54 156.22C109.52 156.3 109.62 156.34 109.66 156.27C116.57 144.89 124.87 134.35 134.31 124.96C143.61 115.71 156.71 107.06 169.01 111.59C183.05 116.77 187.03 135.82 200.1 143.11C210.11 148.69 224.24 144.93 230.14 135.1"
					/>
					<path
						class="path-1"
						style="stroke-width:{1 + i * 0.5}; animation-delay:{2.3 + i * 0.012}s"
						d="M253.53,112.32 C254.85,113.16 255.82,114.35 256.39,115.81 C257.04,117.46 257.17,119.26 257.17,121.03 C257.15,128.08 254.79,135.92 250.13,141.34 C247.54,144.34 243.64,146.51 239.72,145.97 C237.08,145.61 234.68,144.05 233.05,141.95 C230.82,139.07 229.8,135.09 230.13,131.48 C230.45,128.04 231.74,124.76 233.41,121.74 C234.89,119.08 236.69,116.57 238.97,114.55 C240.42,113.27 242.06,112.18 243.84,111.42 C245.51,110.71 247.75,109.98 249.56,110.51 C249.79,110.57 250.03,110.67 250.18,110.85 C250.35,111.06 250.39,111.37 250.27,111.61 C250.19,111.77 250.05,111.89 249.92,112.02 C247.72,114.12 246.53,117.98 247.9,120.83 C248.61,122.28 249.91,123.44 251.43,123.98 C253.47,124.7 255.76,124.32 257.72,123.41 C263.07,120.92 266.56,114.13 272.88,113.79 C277.46,113.55 281.43,117.42 282.88,121.76 C284.33,126.11 283.87,130.83 283.45,135.39 C283.15,138.63 283.54,142.87 286.68,143.73 C289.66,144.55 292.17,141.43 293.41,138.61 C295.43,134.02 296.15,126.39 296.36,121.38 C296.4,120.26 297.15,120.42 297.07,121.49 C296.86,124.38 297.26,129.82 298.32,132.5 C299.8,136.22 302.86,139.53 306.79,140.31 C311.96,141.34 319.2,138.15 323.16,134.67 C327.29,131.02 333.26,122.81 332.16,113.41 C332.13,113.09 332.09,112.77 332.03,112.45 C331.42,108.81 330.13,105.1 327.4,102.61 C324.68,100.12 320.25,99.2199 317.23,101.34 C313.17,104.18 313.96,111.13 317.98,114 C322,116.88 327.5,116.94 332.2,115.38 C336.21,114.05 341.94,110.4 344.72,103.73"
					/>
					<path
						class="path-1"
						style="stroke-width:{1 + i * 0.5}; animation-delay:{2.8 + i * 0.012}s"
						d="M368 87.63C356.68 88.51 343.87 98.99 342.82 110.3C342.49 113.91 343.22 118.02 346.17 120.11C347.89 121.32 350.09 121.65 352.19 121.51C359.64 120.99 365.74 114.99 368.92 108.24C370.85 104.15 371.96 99.48 370.91 95.09C368 85.8403 355.98 37.7599 354.99 33.13C359.65 57.05 365.91 80.66 373.71 103.75C374.27 105.41 375.37 106.88 376.91 107.72C382.05 110.54 386.17 104.52 387.8 99.55C390.37 91.72 392.16 81.98 393.25 73.61C393.26 73.52 393.4 73.53 393.39 73.61C393.13 79.29 392.82 86.31 395.79 91.03C397.31 93.45 399.64 95.33 402.42 95.98C408.02 97.28 411.96 93.25 414.76 89.16C419.97 81.56 423.13 70.98 423.85 61.6C423.85 61.5 424.01 61.5 424.01 61.6C424.48 82.67 423.31 105.38 420.53 126.17C419.65 132.78 418.53 139.57 415 145.23C411.04 151.59 403.29 156.23 395.93 153.49C394.87 153.1 393.87 152.52 393.02 151.78C388.59 147.9 389.87 142.43 391.66 137.83C402.04 111.22 428.383 92.96 452.073 77C454.922 60.5 459.64 33.54 460.82 30.52C455.55 55.33 451.21 80.34 447.81 105.48"
					/>
					<path
						class="path-1"
						style="stroke-width:{1 + i * 0.5}; animation-delay:{4.2 + i * 0.012}s"
						d="M444.82 116.77C443.48 117.46 442.39 118.76 441.71 120C440.96 121.38 440.49 122.96 440.71 124.52C440.93 126.08 441.93 127.57 443.41 128.09C444.38 128.43 445.47 128.34 446.43 127.96C447.39 127.58 448.21 126.92 448.91 126.16C449.96 125.03 450.75 123.63 450.99 122.1C451.41 119.41 449.8 116.33 446.82 116.27C446.11 116.26 445.44 116.44 444.82 116.76V116.77Z"
					/>
				</svg>
			{/each}
		</div>
		<div class="max-w-xl mx-auto">
			<h1 class="textfadein font-medium text-center title-1 text-gray-700 text-balance">
				I'm Doan, a
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
					<span class="magic-text">graphic designer</span>
				</span>
			</h1>
			<h2 class="textfadein text-center title-2 text-gray-500 text-balance">
				who believes that creativity should always be fun even though you have to mix it with
				caffein every morning (and night).
			</h2>
		</div>
	</div>
	<div class="textfadein text-center"><Button text="MY PORTFOLIO" link="/portfolio" /></div>
</div>

<style>
	.hello__svg {
		fill: none;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
	.path-1 {
		stroke-dasharray: 800px;
		stroke-dashoffset: 800px;
		animation-name: anim__hello;
		animation-duration: 2s;
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
			stroke-dashoffset: 800;
		}
		25% {
			stroke-dashoffset: 800;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}

	h1 > .magic {
		display: inline-block;
		position: relative;
		--purple: #a855f7;
		--violet: #8b5cf6;
		--pink: #f9a8d4;
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
