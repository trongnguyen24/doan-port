<script>import Root from "./root.svelte";
import { getCtx } from "../ctx.js";
export let onDrag = void 0;
export let onOpenChange = void 0;
export let open = void 0;
const {
  methods: { onNestedDrag, onNestedRelease, onNestedOpenChange }
} = getCtx();
if (!onNestedDrag) {
  throw new Error("NestedRoot must be a child of a Root");
}
</script>

<Root
	nested={true}
	bind:open
	onClose={() => {
		onNestedOpenChange(false);
	}}
	onDrag={(e, p) => {
		onNestedDrag(e, p);
		onDrag?.(e, p);
	}}
	onOpenChange={(o) => {
		if (o) {
			onNestedOpenChange(o);
		}
		onOpenChange?.(o);
	}}
	onRelease={onNestedRelease}
	{...$$restProps}
>
	<slot />
</Root>
