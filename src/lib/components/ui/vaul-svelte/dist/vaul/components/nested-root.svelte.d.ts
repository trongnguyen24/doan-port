import { SvelteComponent } from "svelte";
import type { Props } from "./types.js";
declare const __propDef: {
    props: Props;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NestedRootProps = typeof __propDef.props;
export type NestedRootEvents = typeof __propDef.events;
export type NestedRootSlots = typeof __propDef.slots;
export default class NestedRoot extends SvelteComponent<NestedRootProps, NestedRootEvents, NestedRootSlots> {
}
export {};
