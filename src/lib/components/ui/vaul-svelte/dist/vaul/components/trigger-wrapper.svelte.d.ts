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
            };
        };
    };
};
export type TriggerWrapperProps = typeof __propDef.props;
export type TriggerWrapperEvents = typeof __propDef.events;
export type TriggerWrapperSlots = typeof __propDef.slots;
export default class TriggerWrapper extends SvelteComponent<TriggerWrapperProps, TriggerWrapperEvents, TriggerWrapperSlots> {
}
export {};
