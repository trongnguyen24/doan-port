<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import DrawerOverlay from './drawer-overlay.svelte';
	import { cn } from '$lib/utils';

	type $$Props = DrawerPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Portal>
	<DrawerOverlay />
	<DrawerPrimitive.Content
		class={cn(
			'fixed bottom-0 md:max-w-lg md:-ml-64  w-full md:left-1/2 md:-translate-x-1/2 z-50 mt-24 flex h-auto flex-col rounded-t-3xl border bg-white bg-opacity-90 backdrop-blur-lg',
			className
		)}
		{...$$restProps}
	>
		<div class="mx-auto mt-4 h-1 w-[100px] rounded-full bg-gray-200" />
		<slot />
	</DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
