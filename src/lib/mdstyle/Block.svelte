<script lang="ts">
	// Default values for span and offset
	export let size: '1' | '2' | '3' | '4' | 'none' = '4';
	export let position: '1' | '2' | '3' | '4' | 'none' = 'none';

	// Define the mappings for spans and offsets
	const spans = {
		'1': 'col-span-1',
		'2': 'col-span-2',
		'3': 'col-span-3',
		'4': 'col-span-4',
		none: ''
	};
	const starts = {
		'1': 'col-start-1',
		'2': 'col-start-2',
		'3': 'col-start-3',
		'4': 'col-start-4',
		none: ''
	};

	$: span = spans[size];
	$: start = starts[position];
</script>

<div class="{span} {start} ">
	<slot />
</div>
