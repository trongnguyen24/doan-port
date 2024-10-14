<script>import { getCtx } from "../ctx.js";
export let meltBuilder;
const {
  refs: { triggerRef }
} = getCtx();
$:
  ({ action, ...rest } = meltBuilder);
const wrappedAction = (node) => {
  triggerRef.set(node);
  return action(node);
};
$:
  Object.assign(rest, {
    action: wrappedAction
  });
</script>

<slot newBuilder={rest} />
