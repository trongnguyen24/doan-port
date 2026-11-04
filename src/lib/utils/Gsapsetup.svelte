<script>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({});
		const onScroll = () => ScrollTrigger.update();
		let frame = 0;

		/**
		 * @param {number} time
		 */
		const raf = (time) => {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		};

		lenis.on('scroll', onScroll);
		frame = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(frame);
			lenis.off('scroll', onScroll);
			lenis.destroy();
		};
	});
</script>
