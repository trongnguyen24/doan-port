<script lang="ts">
	interface Props {
		// Default values for span and offset
		size?: '1' | '2' | '3' | '4' | 'none';
		position?: '1' | '2' | '3' | '4' | 'none';
		mobile?: '4' | '31' | '32' | 'none';
		children?: import('svelte').Snippet;
	}

	let { size = '4', position = 'none', mobile = '4', children }: Props = $props();

	// Define the mappings for spans and offsets
	const spans = {
		'1': 'md:col-span-1',
		'2': 'md:col-span-2',
		'3': 'md:col-span-3',
		'4': 'md:col-span-4',
		none: ''
	};
	const starts = {
		'1': 'md:col-start-1',
		'2': 'md:col-start-2',
		'3': 'md:col-start-3',
		'4': 'md:col-start-4',
		none: ''
	};

	const mobiles = {
		'4': 'col-span-4',
		'31': 'col-start-1 col-span-3',
		'32': 'col-start-2 col-span-3',
		none: ''
	};

	let span = $derived(spans[size]);
	let start = $derived(starts[position]);
	let md = $derived(mobiles[mobile]);
</script>

<div class="{span} {start} {md}">
	{@render children?.()}
</div>
