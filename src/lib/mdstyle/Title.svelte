<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<h1 class="title-1 reveal-text text-gray-900">
	{@render children?.()}
</h1>
