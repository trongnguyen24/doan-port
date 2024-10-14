import { SvelteComponent } from "svelte";
import type { OverlayProps } from "./types.js";
declare const __propDef: {
    props: OverlayProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type OverlayProps_ = typeof __propDef.props;
export { OverlayProps_ as OverlayProps };
export type OverlayEvents = typeof __propDef.events;
export type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponent<OverlayProps, OverlayEvents, OverlaySlots> {
}
