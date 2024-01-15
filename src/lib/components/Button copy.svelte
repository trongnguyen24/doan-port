<script>
	export let text = 'My Work';
</script>

<button class="shim_button relative px-12 py-3 overflow-hidden rounded-full">
	<div class="spark_content absolute w-full top-0 left-0 h-full">
		<div class="spark absolute w-[200%] aspect-square rounded-full"></div>
	</div>
	<div class="backdrop absolute inset-0.5 rounded-full"></div>
	<div class="text text-xl relative">{text}</div>
</button>

<style>
	.shim_button {
		--spark: 2s;
		--active: 0;
		--transition: 0.25s;
		--bg-color: 271;
		--bg: hsl(var(--bg-color) 92% 72%);
		background: var(--bg);
	}
	button:active {
		scale: 0.97;
	}

	.shim_button:is(:hover, :focus-visible) {
		--active: 1;
	}
	.spark_content {
		mask: linear-gradient(rgb(0, 0, 0), transparent 50%);
		animation: flip calc(var(--spark) * 2) infinite steps(2, end);
		overflow: hidden;
	}
	.spark {
		rotate: 0deg;
		inset: 0 auto auto 50%;
		top: 0px;
		right: auto;
		rotate: -90deg;
		bottom: auto;
		translate: -50% -15%;
		animation: btn_spin var(--spark) linear infinite;
		background: conic-gradient(
			from 0deg,
			transparent 0 340deg,
			hsl(var(--bg-color) 90% 95%) 360deg
		);
	}
	.backdrop {
		background: hsl(var(--bg-color) 92% calc((var(--active) * -28%) + 100%));
		transition: background var(--transition);
		background-size: 120%;
		background-position: center;
	}
	.text {
		color: hsl(var(--bg-color) 92% calc((var(--active) * 26%) + 72%));
		transition: color var(--transition);
	}

	@keyframes btn_spin {
		to {
			rotate: 90deg;
		}
	}
	@keyframes flip {
		to {
			rotate: 360deg;
		}
	}
</style>
