<script lang="ts">
	export let col: number = 4;
	export let offset: number = 0;
</script>

<div class="col-span-{col} col-start-{offset} bg-slate-200">
	<slot />
</div>

<div
	class="hiden col-span-1 col-span-2 col-span-3 col-span-4 col-start-1 col-start-2 col-start-3 col-start-4"
></div>
