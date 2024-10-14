<script>import { onMount } from "svelte";
import { getCtx } from "../ctx.js";
const {
  states: { visible },
  methods: { scaleBackground, restorePositionSetting }
} = getCtx();
onMount(() => {
  visible.set(true);
  return () => {
    scaleBackground(false);
    restorePositionSetting();
  };
});
</script>
