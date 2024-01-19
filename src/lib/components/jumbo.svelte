<div class="fadein absolute -z-10 inset-0 overflow-hidden">
	<div class="jumbo absolute -inset-6 opacity-50"></div>
	<div class="noiseee inset-0 absolute opacity-70"></div>
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

	@keyframes noiseee {
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
		background-image: url('/nnnoise.svg');
		animation: noiseee 30s steps(50) infinite;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
	}
	.jumbo {
		--stripes: repeating-linear-gradient(
			100deg,
			#fff 0%,
			#fff 7%,
			transparent 10%,
			transparent 12%,
			#fff 16%
		);
		--stripesDark: repeating-linear-gradient(
			100deg,
			#000 0%,
			#000 7%,
			transparent 10%,
			transparent 12%,
			#000 16%
		);
		--rainbow: repeating-linear-gradient(
			100deg,
			#60a5fa 10%,
			#e879f9 15%,
			#60a5fa 20%,
			#5eead4 25%,
			#60a5fa 30%
		);
		background-image: var(--stripes), var(--rainbow);
		background-size: 200%, 150%;
		background-position:
			50% 50%,
			50% 50%;

		filter: blur(10px) invert(100%);

		mask-image: radial-gradient(ellipse at 60% 0%, black 20%, transparent 50%);

		pointer-events: none;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
	}

	.jumbo::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--stripes), var(--rainbow);
		background-size: 180%, 180%;
		animation: jumbo 300s linear infinite;
		background-attachment: fixed;
		mix-blend-mode: difference;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
	}
</style>
