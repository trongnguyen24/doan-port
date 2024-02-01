<script>import { Dialog as DialogPrimitive } from "bits-ui";
import { getCtx } from "../ctx.js";
import Visible from "./visible.svelte";
const {
  refs: { drawerRef },
  states: { visible },
  helpers: { getContentStyle },
  methods: { onPress, onDrag, onRelease }
} = getCtx();
export let style = "";
</script>

<DialogPrimitive.Content
	bind:el={$drawerRef}
	style={$getContentStyle(style)}
	on:pointerdown={(e) => {
		onPress(e);
	}}
	on:pointerup={(e) => {
		onRelease(e);
	}}
	on:pointermove={(e) => {
		onDrag(e);
	}}
	on:touchend={(e) => {
		onRelease(e);
	}}
	on:touchmove={(e) => {
		onDrag(e);
	}}
	data-vaul-drawer=""
	data-vaul-drawer-visible={$visible ? "true" : "false"}
	{...$$restProps}
>
	<Visible />
	<slot />
</DialogPrimitive.Content>
