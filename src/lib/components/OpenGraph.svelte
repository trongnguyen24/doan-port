<script>
	import { page } from '$app/stores';
	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [description]
	 * @property {any} [url]
	 * @property {string} [siteName]
	 * @property {string} [locale]
	 * @property {string} [twitterCard]
	 */

	/** @type {Props} */
	let {
		title = "Doan's Portfolio  - Graphic Designer",
		description = 'who believes that creativity should always be fun even though you have to mix it with caffein every morning (and night).',
		url = $page.url.origin,
		siteName = 'Portfolio của Doan',
		locale = 'vi_VN',
		twitterCard = "Doan's Portfolio"
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={$page.url.origin + '/og-image.jpg'} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={locale} />
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={$page.url.origin + '/og-image.jpg'} />
</svelte:head>
