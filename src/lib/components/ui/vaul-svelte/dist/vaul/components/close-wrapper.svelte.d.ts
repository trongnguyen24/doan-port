import { SvelteComponent } from "svelte";
import type { Builder } from "../../internal/types.js";
declare const __propDef: {
    props: {
        meltBuilder: Builder;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            newBuilder: {
                [x: string]: any;
                action: import("svelte/action").Action<any, any, Record<string, any>>;
            };
        };
    };
};
export type CloseWrapperProps = typeof __propDef.props;
export type CloseWrapperEvents = typeof __propDef.events;
export type CloseWrapperSlots = typeof __propDef.slots;
export default class CloseWrapper extends SvelteComponent<CloseWrapperProps, CloseWrapperEvents, CloseWrapperSlots> {
}
export {};
