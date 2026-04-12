<script>
	import avatarAvif from '$lib/images/nl.avif';
	import avatarWebp from '$lib/images/nl.webp';
	import avatarJpg from '$lib/images/nl.jpg';
	import { _ } from 'svelte-i18n';
</script>

<section class="py-4">
	<div class="flex flex-row gap-6">
		<div
			class="w-[7.8rem] h-[7.8rem] flex justify-center items-center rounded-3xl rounded-br-none overflow-hidden relative"
		>
			<picture class="w-[7.6rem] h-[7.6rem]">
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
			<div class="absolute inset-0 rounded-3xl rounded-br-none border-4 border-slate-700"></div>
		</div>
		<h2 class="font-bold text-4xl leading-tight text-slate-800 font-serif">
			{$_('about.greeting')}<br />I'm <span class="text-blue-500">Nguyen</span>
			<div
				class="font-serif text-base max-w-[11rem] bg-blue-500 mt-2 rounded-full rounded-bl-none border-blue-500 overflow-hidden font-bold text-slate-800"
			>
				<div class="carousels1 flex w-max">
					<span class="flex items-center font-mono text-white gap-3 shrink-0 job min-w-max">
						<span>{$_('about.roles_designer')}</span> · <span>{$_('about.roles_3d')}</span> ·
						<span>{$_('about.roles_dev')}</span> ·
					</span>
					<span
						class="flex items-center font-mono text-white gap-3 shrink-0 job min-w-max"
						aria-hidden="true"
					>
						<span>{$_('about.roles_designer')}</span> · <span>{$_('about.roles_3d')}</span> ·
						<span>{$_('about.roles_dev')}</span> ·
					</span>
				</div>
			</div>
		</h2>
	</div>

	<div class="title-4 my-8 text-slate-600 leading-relaxed">
		{$_('about.bio1')}
		<br /><br />
		{@html $_('about.bio2')}
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<div>
			<div><small>{$_('about.label_fullname')}</small></div>
			<p class="font-medium">Lê Trọng Nguyên</p>
		</div>
		<div>
			<div><small>{$_('about.label_email')}</small></div>
			<a class="font-medium" href="mailto:trongnguyen24@gmail.com">trongnguyen24@gmail.com</a>
		</div>
		<div>
			<div><small>{$_('about.label_phone')}</small></div>
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
