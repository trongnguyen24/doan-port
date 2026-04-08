<script>
	import avatarAvif from '$lib/images/nl.avif';
	import avatarWebp from '$lib/images/nl.webp';
	import avatarJpg from '$lib/images/nl.jpg';
</script>

<section class="py-4">
	<div class="flex flex-row gap-6">
		<picture
			class="w-[7.6rem] rounded-3xl rounded-br-none overflow-hidden border-4 border-slate-700"
		>
			<source width="400" height="400" srcset={avatarAvif} type="image/avif" />
			<source width="400" height="400" srcset={avatarWebp} type="image/webp" />
			<img
				width="400"
				height="400"
				src={avatarJpg}
				alt="Nguyen Le"
				class="h-full w-full object-cover"
			/>
		</picture>
		<h2 class="font-bold text-4xl leading-tight text-slate-800 font-serif">
			Hi!<br />I'm <span class="text-blue-500">Nguyen</span>
			<div
				class="font-serif text-sm max-w-[11rem] bg-blue-500 mt-2 rounded-full rounded-bl-none border-blue-500 overflow-hidden font-bold text-slate-800"
			>
				<div class="carousels1 flex w-max">
					<span class="flex items-center font-mono text-white gap-3 shrink-0 job min-w-max">
						<span>UI/UX Designer</span> · <span>3D Visualizer</span> · <span>Developer</span> ·
					</span>
					<span
						class="flex items-center font-mono text-white gap-3 shrink-0 job min-w-max"
						aria-hidden="true"
					>
						<span>UI/UX Designer</span> · <span>3D Visualizer</span> · <span>Developer</span> ·
					</span>
				</div>
			</div>
		</h2>
	</div>

	<div class="title-4 my-8 text-slate-600 leading-relaxed">
		I am a skilled UI/UX designer and FE developer based in Ho Chi Minh City, specializing in
		creating innovative and high-quality user experiences.<br /><br />
		If you are seeking a talented designer to elevate your brand and drive business growth, I would be
		thrilled to join forces with you. Let's connect and work together to achieve your goals.
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<div>
			<div><small>Full name</small></div>
			<p class="font-medium">Lê Trọng Nguyên</p>
		</div>
		<div>
			<div><small>Email</small></div>
			<a class="font-medium" href="mailto:trongnguyen24@gmail.com">trongnguyen24@gmail.com</a>
		</div>
		<div>
			<div><small>Phone</small></div>
			<a class="font-medium" href="tel:0379573674">0379 573 674</a>
		</div>
	</div>
</section>

<style>
	.carousels1 {
		width: max-content;
		will-change: transform;
		animation: roles-slide 18s linear infinite;
	}

	.job {
		padding-right: 0.75rem;
	}

	@keyframes roles-slide {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-50%, 0, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.carousels1 {
			animation: none;
		}
	}
</style>
