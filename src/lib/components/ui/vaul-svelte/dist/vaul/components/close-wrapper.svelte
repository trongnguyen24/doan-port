<script>import { getCtx } from "../ctx.js";
export let meltBuilder;
const {
  methods: { closeDrawer }
} = getCtx();
$:
  ({ _, ...rest } = meltBuilder);
const wrappedAction = (node) => {
  const handleKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeDrawer(true);
    }
  };
  const handleClick = () => {
    closeDrawer();
  };
  node.addEventListener("keydown", handleKeydown);
  node.addEventListener("click", handleClick);
  return () => {
    node.removeEventListener("keydown", handleKeydown);
    node.removeEventListener("click", handleClick);
  };
};
$:
  Object.assign(rest, {
    action: wrappedAction
  });
</script>

<slot newBuilder={rest} />
