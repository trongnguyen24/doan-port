<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<p class="reveal-text title-3 text-gray-600">
	{@render children?.()}
</p>
