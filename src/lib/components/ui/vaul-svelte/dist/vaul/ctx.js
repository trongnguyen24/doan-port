import { getOptionUpdater } from "../internal/helpers/options.js";
import { createVaul } from "../internal/vaul.js";
import { getContext, setContext } from "svelte";
const VAUL_ROOT = Symbol("VAUL_ROOT");
export function setCtx(props = {}) {
    const vaul = createVaul(props);
    const updateOption = getOptionUpdater(vaul.options);
    setContext(VAUL_ROOT, { ...vaul, updateOption });
    return {
        ...vaul,
        updateOption
    };
}
export function getCtx() {
    return getContext(VAUL_ROOT);
}
