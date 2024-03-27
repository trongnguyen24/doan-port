<script>
	export let text = 'My Work';
	export let link = '';
</script>

<a download href={link}>
	<button
		class="shim_button font-medium bg-violet-400 hover:shadow-xl hover:shadow-violet-200 transition-all duration-500 text-base md:text-md relative group overflow-hidden rounded-full"
	>
		<div class="spark_content absolute w-full top-0 left-0 h-full">
			<div class="spark absolute w-[200%] aspect-square rounded-full"></div>
		</div>
		<div class="backdrop bg-white absolute inset-0.5 rounded-full">
			<div
				class="absolute inset-[-0.05rem] flex justify-center items-center transition-all text-violet-50 bg-violet-400 translate-y-[-107%] scale-110 group-hover:rounded-[24px] group-hover:scale-100 group-hover:translate-y-0 duration-500 rounded-bl-[50%] rounded-br-[50%]"
			>
				{text}
			</div>
		</div>
		<div class="text relative">
			<div
				class="px-4 py-1.5 sm:px-6 text-violet-400 group-hover:translate-y-12 transition-all duration-500 scale-100 group-hover:scale-75 w-full h-full text-center"
			>
				{text}
			</div>
		</div>
	</button>
</a>

<style>
	.shim_button {
		--spark: 2s;
		--bg-color: 271;
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
			transparent 0 330deg,
			hsl(var(--bg-color) 95% 95%) 360deg
		);
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
