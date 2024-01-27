<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';

	onMount(async () => {
		const overlayPath = document.querySelector('.overlay__path');
		const overlayTrans = document.querySelector('#overlay_trans');

		// opens the menu
		const openMenu = () => {
			gsap
				.timeline({})
				.set(overlayTrans, {
					display: 'block'
				})
				.set(overlayPath, {
					attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 Q 50 100 0 100' }
				})
				.to(overlayPath, {
					duration: 0.8,
					ease: 'power4.in',
					attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 Q 50 100 0 100' }
				})
				.to(overlayPath, {
					duration: 0.2,
					ease: 'power2',
					attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 Q 50 100 0 100' }
				})
				.to(overlayPath, {
					duration: 0.1,
					ease: 'power2',
					attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 Q 50 100 0 100' }
				})
				.to(overlayPath, {
					duration: 0.4,
					ease: 'power2.in',
					attr: { d: 'M 0 50 V 0 Q 50 0 100 0 V 50 Q 50 100 0 50' }
				})
				.to(overlayPath, {
					duration: 0.6,
					ease: 'power4',
					attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 Q 50 0 0 0' }
				})
				.set(overlayTrans, {
					display: 'none'
				});
		};

		openMenu();
	});
	afterNavigate(() => {
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 1100);
	});
</script>

<section id="overlay_trans" class=" h-full w-full fixed top-0 z-[49]">
	<svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
		<path class="overlay__path" fill="#f9f9fb" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
	</svg>
</section>
