<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<section scroll="reveal" class="grid container py-8 md:py-12 xl:py-16 grid-cols-4 gap-6 md:gap-8">
	{@render children?.()}
</section>
