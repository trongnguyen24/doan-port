<script lang="ts">
	// Default values for span and offset
	export let size: '1' | '2' | '3' | '4' | 'none' = '4';
	export let position: '1' | '2' | '3' | '4' | 'none' = 'none';
	export let mobile: '4' | '31' | '32' | 'none' = '4';

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

	$: span = spans[size];
	$: start = starts[position];
	$: md = mobiles[mobile];
</script>

<div class="{span} {start} {md}">
	<slot />
</div>
