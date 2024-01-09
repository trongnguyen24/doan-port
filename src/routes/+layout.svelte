<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>
