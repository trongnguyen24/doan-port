import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VisibleProps = typeof __propDef.props;
export type VisibleEvents = typeof __propDef.events;
export type VisibleSlots = typeof __propDef.slots;
export default class Visible extends SvelteComponent<VisibleProps, VisibleEvents, VisibleSlots> {
}
export {};
