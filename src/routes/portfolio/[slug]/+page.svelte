<script lang="ts">
	export let data: any;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name={data.meta.description} content={data.meta.title} />
</svelte:head>
<div class=" pb-24 md:pb-32">
	<svelte:component this={data.content} />
</div>

<style>
</style>
