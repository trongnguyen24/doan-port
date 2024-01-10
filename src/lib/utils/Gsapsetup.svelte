<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);
			const lenis = new Lenis({});

			lenis.on('scroll', ScrollTrigger.update);

			/**
			 * @param {any} time
			 */
			function raf(time) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);

			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});

			gsap.ticker.lagSmoothing(0);
		}
	});
</script>
