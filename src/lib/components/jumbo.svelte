<div class="fadein absolute -z-10 inset-0 overflow-hidden">
	<div class="jumbo inset-0 -z-[3] absolute"></div>
	<!-- <div class="absolute inset-0 -z-[6] backdrop-blur-sm"></div> -->
	<!-- <div class="noiseee inset-0 absolute opacity-80"></div> -->
</div>

<style>
	@keyframes jumbo {
		from {
			background-position:
				50% 50%,
				50% 50%;
		}
		to {
			background-position:
				1550% 50%,
				1550% 50%;
		}
	}

	/* @keyframes noiseee {
		0% {
			background-position:
				50% 50%,
				50% 50%;
		}
		50% {
			background-position:
				-150% -50%,
				-150% 650%;
		}
		100% {
			background-position:
				-350% 250%,
				-350% 350%;
		}
	}
	.noiseee {
		background-image: url('/nnnoise.png');
		animation: noiseee 30s steps(50) infinite;
	} */
	.jumbo {
		--stripes: repeating-linear-gradient(
			90deg,
			#fff 0%,
			#fff 7%,
			transparent 10%,
			transparent 12%,
			#fff 16%
		);
		--stripesDark: repeating-linear-gradient(
			90deg,
			#000 0%,
			#000 7%,
			transparent 10%,
			transparent 12%,
			#000 16%
		);
		--rainbow: repeating-linear-gradient(
			90deg,
			#bfdbfe 10%,
			#f6c3ff 15%,
			#93c5fd 20%,
			#99f6e4 25%,
			#bfdbfe 30%
		);
		/* --rainbow: repeating-linear-gradient(
			90deg,
			#60a5fa 10%,
			#e879f9 15%,
			#60a5fa 20%,
			#5eead4 25%,
			#60a5fa 30%
		); */
		background-image: var(--stripes), var(--rainbow);
		background-size: 200%, 150%;
		background-position:
			50% 50%,
			50% 50%;

		filter: invert(100%);

		mask-image: radial-gradient(ellipse at 60% 0%, black 20%, transparent 50%);

		pointer-events: none;
	}

	.jumbo::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -5;
		background-image: var(--stripes), var(--rainbow);
		background-size: 180%, 160%;
		animation: jumbo 300s linear infinite;
		background-attachment: fixed;
		mix-blend-mode: difference;
	}

	@media only screen and (max-width: 600px) {
		.jumbo {
			background-size: 400%, 300%;
		}
		.jumbo::after {
			background-size: 380%, 320%;
		}
	}
</style>
