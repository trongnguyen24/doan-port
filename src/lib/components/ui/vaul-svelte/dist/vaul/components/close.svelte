<script>import { Dialog as DialogPrimitive } from "bits-ui";
import { getCtx } from "../ctx.js";
import CloseWrapper from "./close-wrapper.svelte";
export let el = void 0;
export let asChild = false;
const {
  methods: { closeDrawer }
} = getCtx();
</script>

{#if asChild}
	<DialogPrimitive.Close
		bind:el
		on:click={(e) => {
			e.preventDefault();
			closeDrawer();
		}}
		on:keydown={(e) => {
			if (e.detail.originalEvent.key === "Enter" || e.detail.originalEvent.key === " ") {
				e.preventDefault();
				closeDrawer(true);
			}
		}}
		{...$$restProps}
		{asChild}
		let:builder
	>
		<CloseWrapper meltBuilder={builder} let:newBuilder>
			<slot builder={newBuilder} />
		</CloseWrapper>
	</DialogPrimitive.Close>
{:else}
	<DialogPrimitive.Close
		bind:el
		on:click={(e) => {
			e.preventDefault();
			closeDrawer();
		}}
		on:keydown={(e) => {
			if (e.detail.originalEvent.key === "Enter" || e.detail.originalEvent.key === " ") {
				e.preventDefault();
				closeDrawer(true);
			}
		}}
		{...$$restProps}
		{asChild}
		let:builder
	>
		<slot {builder} />
	</DialogPrimitive.Close>
{/if}
