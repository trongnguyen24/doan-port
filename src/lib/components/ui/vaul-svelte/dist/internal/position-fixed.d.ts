/// <reference types="svelte" />
import { type Writable } from "svelte/store";
export declare function handlePositionFixed({ isOpen, modal, nested, hasBeenOpened }: {
    isOpen: Writable<boolean>;
    modal: Writable<boolean>;
    nested: Writable<boolean>;
    hasBeenOpened: Writable<boolean>;
}): {
    restorePositionSetting: () => void;
};
