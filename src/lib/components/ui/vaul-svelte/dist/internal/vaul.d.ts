/// <reference types="svelte" />
import { type Readable } from "svelte/store";
import type { SvelteEvent } from "./types.js";
import { type ChangeFn } from "./helpers/index.js";
type WithFadeFromProps = {
    snapPoints: (number | string)[];
    fadeFromIndex: number;
};
type WithoutFadeFromProps = {
    snapPoints?: (number | string)[];
    fadeFromIndex?: never;
};
export type CreateVaulProps = {
    defaultActiveSnapPoint?: number | string | null;
    onActiveSnapPointChange?: ChangeFn<number | string | null>;
    defaultOpen?: boolean;
    onOpenChange?: ChangeFn<boolean>;
    closeThreshold?: number;
    shouldScaleBackground?: boolean;
    backgroundColor?: string;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    onDrag?: (event: SvelteEvent<PointerEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
    onRelease?: (event: SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, open: boolean) => void;
    modal?: boolean;
    nested?: boolean;
    onClose?: () => void;
} & (WithFadeFromProps | WithoutFadeFromProps);
export declare function createVaul(props: CreateVaulProps): {
    states: {
        isOpen: {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: import("svelte/store").Invalidator<boolean> | undefined): import("svelte/store").Unsubscriber;
        };
        hasBeenOpened: import("svelte/store").Writable<boolean>;
        snapPoints: import("svelte/store").Writable<(string | number)[] | undefined>;
        activeSnapPoint: {
            update: (updater: import("svelte/store").Updater<string | number | null>, sideEffect?: ((newValue: string | number | null) => void) | undefined) => void;
            set: (this: void, value: string | number | null) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<string | number | null>, invalidate?: import("svelte/store").Invalidator<string | number | null> | undefined): import("svelte/store").Unsubscriber;
        };
        snapPointsOffset: Readable<number[]>;
        keyboardIsOpen: import("svelte/store").Writable<boolean>;
        shouldFade: Readable<boolean>;
        visible: import("svelte/store").Writable<boolean>;
        drawerId: import("svelte/store").Writable<string | undefined>;
        openDrawerIds: import("svelte/store").Writable<string[]>;
    };
    helpers: {
        getContentStyle: Readable<(style?: string | null) => string>;
    };
    methods: {
        closeDrawer: (withKeyboard?: boolean) => void;
        onOpenChange: ChangeFn<boolean> | undefined;
        onPress: (event: SvelteEvent<PointerEvent, HTMLElement>) => void;
        onRelease: (event: SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>) => void;
        onDrag: (event: SvelteEvent<PointerEvent | TouchEvent, HTMLElement>) => void;
        scaleBackground: (open: boolean, backgroundColor?: string | undefined) => void;
        onNestedDrag: (_: SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onNestedOpenChange: (o: boolean) => void;
        onNestedRelease: (_: SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, o: boolean) => void;
        restorePositionSetting: () => void;
        openDrawer: () => void;
    };
    refs: {
        drawerRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        overlayRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        triggerRef: import("svelte/store").Writable<HTMLButtonElement | undefined>;
    };
    options: import("./helpers/index.js").ToWritableStores<Omit<{
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    } | {
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    }, "defaultOpen" | "onOpenChange" | "defaultActiveSnapPoint" | "onActiveSnapPointChange" | "onDrag" | "onRelease" | "onClose">>;
};
export declare function dampenValue(v: number): number;
export {};
