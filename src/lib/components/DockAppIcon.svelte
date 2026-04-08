<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let mouseX = Infinity;
	export let tooltip = '';
	export let href = undefined;
	export let onclick = undefined;
	export let isActive = false;
	export let isMobile = false;
	export let ariaLabel = tooltip;

	let ref;
	let tween;

	onMount(() => {
		if (!isMobile && ref) {
			tween = gsap.to(ref, {
				width: 44,
				'--icon-scale': 1,
				duration: 0.2,
				ease: 'power1.out'
			});
			gsap.set(ref, { top: 0, '--icon-scale': 1 });
		}

		return () => {
			tween?.kill();
		};
	});

	$: if (!isMobile && ref && !tween) {
		tween = gsap.to(ref, {
			width: 44,
			'--icon-scale': 1,
			duration: 0.2,
			ease: 'power1.out'
		});
		gsap.set(ref, { top: 0, '--icon-scale': 1 });
	}

	$: if (!isMobile && ref && tween && mouseX !== Infinity) {
		const rect = ref.getBoundingClientRect();
		const distance = mouseX - (rect.x + rect.width / 2);
		const impactDistance = 100;
		const normalizedDistance = Math.abs(distance) / impactDistance;
		const targetWidth = normalizedDistance > 1 ? 44 : 44 + 40 * (1 - normalizedDistance);
		const iconScale = targetWidth / 44;

		tween.vars.width = targetWidth;
		tween.vars['--icon-scale'] = iconScale;
		tween.invalidate().restart();
	} else if (ref && tween) {
		tween.vars.width = 44;
		tween.vars['--icon-scale'] = 1;
		tween.invalidate().restart();
	}

	$: if (isMobile && ref) {
		tween?.kill();
		tween = undefined;
		gsap.set(ref, { width: 44, top: 0, '--icon-scale': 1 });
	}

	function handleMouseUp() {
		if (!ref) return;

		const tl = gsap.timeline();
		tl.to(ref, { top: -32, duration: 0.25, ease: 'power1.in' }).to(ref, {
			top: 0,
			duration: 0.4,
			ease: 'bounce.out'
		});
	}

	function handleActivate(event) {
		handleMouseUp();
		onclick?.(event);
	}
</script>

<div
	bind:this={ref}
	class="dock-icon relative aspect-square w-[2.75rem] rounded-full border border-[rgba(226,228,233,0.95)] bg-[#f1f2f5] text-[#6b6b70] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] active:translate-y-1.5 transition-transform duration-100 ease-in"
>
	<div
		class="tooltip pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		<span
			class="tooltip-text arrow_box block rounded-full border border-[rgba(226,228,233,0.95)] bg-[#f7f8fb] px-1.5 py-0.5 text-xs text-[#6b6b70]"
		>
			{tooltip}
		</span>
	</div>

	{#if href}
		<a
			{href}
			class="absolute inset-0 flex h-full w-full items-center justify-center rounded-full"
			aria-current={isActive ? 'page' : undefined}
			aria-label={ariaLabel}
			data-sveltekit-noscroll
			on:click={handleActivate}
		>
			<span class="dock-icon-content">
				<slot />
			</span>
		</a>
	{:else}
		<button
			type="button"
			class="absolute inset-0 flex h-full w-full items-center justify-center rounded-full"
			aria-label={ariaLabel}
			on:click={handleActivate}
		>
			<span class="dock-icon-content">
				<slot />
			</span>
		</button>
	{/if}

	{#if isActive}
		<div class="active-indicator" aria-hidden="true"></div>
	{/if}
</div>

<style>
	.active-indicator {
		height: 4px;
		width: 4px;
		background-color: rgb(175, 175, 175);
		border-radius: 50%;
		position: absolute;
		bottom: -0.4rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.arrow_box {
		position: relative;
	}

	.arrow_box:after,
	.arrow_box:before {
		top: 100%;
		left: 50%;
		border: solid transparent;
		content: '';
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.arrow_box:after {
		border-color: rgba(255, 255, 255, 0);
		border-top-color: #f7f8fb;
		border-width: 4px;
		margin-left: -4px;
	}

	.arrow_box:before {
		border-color: rgba(194, 225, 245, 0);
		border-top-color: rgba(226, 228, 233, 0.95);
		border-width: 5px;
		margin-left: -5px;
	}

	.dock-icon .tooltip {
		opacity: 0;
		transition: opacity 0.3s ease-out;
		transition-delay: var(--delay-tooltip);
	}

	.dock-icon-content {
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(var(--icon-scale, 1));
		transform-origin: center;
	}

	.dock-icon:hover .tooltip {
		opacity: 1;
		transition: opacity 0.1s ease-out;
		transition-delay: var(--delay-tooltip);
	}
	a[aria-current='page'],
	button:focus-visible,
	a:focus-visible {
		outline: none;
	}
</style>
