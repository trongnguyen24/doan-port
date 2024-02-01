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
export type RootProps = typeof __propDef.props;
export type RootEvents = typeof __propDef.events;
export type RootSlots = typeof __propDef.slots;
export default class Root extends SvelteComponent<RootProps, RootEvents, RootSlots> {
}
export {};
