<script>
	export let text = 'Shim Shimmer';
</script>

<button class="shim_button relative px-12 py-4 text-gray-700 overflow-hidden rounded-full">
	<div class="spark_content absolute w-full top-0 left-0 h-full">
		<div class="spark absolute w-[200%] aspect-square rounded-full"></div>
	</div>
	<div class="backdrop absolute inset-px rounded-full"></div>
	<div class="text relative">{text}</div>
</button>

<style>
	.shim_button {
		--spark: 2s;
		background: radial-gradient(40% 50% at center 100%, hsl(281, 44%, 92%), transparent),
			radial-gradient(80% 100% at center 120%, hsl(300, 100%, 99%), transparent), hsl(270, 17%, 98%);
	}
	.spark_content {
		mask: linear-gradient(rgb(0, 0, 0), transparent 50%);
		animation: flip calc(var(--spark) * 2) infinite steps(2, end);
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
		background: conic-gradient(from 0deg, transparent 0 340deg, #c4b5fd 360deg);
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
