<script lang="ts">
	export let data: any;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name={data.description} content={data.title} />
</svelte:head>
<div class=" pb-24 md:pb-32">
	<svelte:component this={data.content} />
</div>

<style>
</style>
