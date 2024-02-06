<script>
	import { page } from '$app/stores';
	export let title = "Doan's Portfolio  - Graphic Designer";
	export let description =
		'who believes that creativity should always be fun even though you have to mix it with caffein every morning (and night).';
	export let url = $page.url.origin;
	export let siteName = 'Portfolio của Doan';
	export let locale = 'vi_VN';
	export let twitterCard = "Doan's Portfolio";
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
