<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="reveal-img overflow-hidden rounded-xl md:rounded-3xl">
	{@render children?.()}
</div>
