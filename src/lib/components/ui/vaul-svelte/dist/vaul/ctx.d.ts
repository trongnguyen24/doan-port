/// <reference types="svelte" />
import { type CreateVaulProps } from "../internal/vaul.js";
export declare function setCtx(props?: CreateVaulProps): {
    updateOption: <K extends string, V extends unknown>(key: K, value: V | undefined) => void;
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
        snapPointsOffset: import("svelte/store").Readable<number[]>;
        keyboardIsOpen: import("svelte/store").Writable<boolean>;
        shouldFade: import("svelte/store").Readable<boolean>;
        visible: import("svelte/store").Writable<boolean>;
        drawerId: import("svelte/store").Writable<string | undefined>;
        openDrawerIds: import("svelte/store").Writable<string[]>;
    };
    helpers: {
        getContentStyle: import("svelte/store").Readable<(style?: string | null | undefined) => string>;
    };
    methods: {
        closeDrawer: (withKeyboard?: boolean) => void;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        onPress: (event: import("../internal").SvelteEvent<PointerEvent, HTMLElement>) => void;
        onRelease: (event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>) => void;
        onDrag: (event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>) => void;
        scaleBackground: (open: boolean, backgroundColor?: string | undefined) => void;
        onNestedDrag: (_: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void;
        onNestedOpenChange: (o: boolean) => void;
        onNestedRelease: (_: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, o: boolean) => void;
        restorePositionSetting: () => void;
        openDrawer: () => void;
    };
    refs: {
        drawerRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        overlayRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        triggerRef: import("svelte/store").Writable<HTMLButtonElement | undefined>;
    };
    options: import("../internal/helpers").ToWritableStores<Omit<{
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: import("../internal/helpers").ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    } | {
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: import("../internal/helpers").ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    }, "defaultOpen" | "onOpenChange" | "defaultActiveSnapPoint" | "onActiveSnapPointChange" | "onDrag" | "onRelease" | "onClose">>;
};
export declare function getCtx(): {
    updateOption: <K extends string, V extends unknown>(key: K, value: V | undefined) => void;
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
        snapPointsOffset: import("svelte/store").Readable<number[]>;
        keyboardIsOpen: import("svelte/store").Writable<boolean>;
        shouldFade: import("svelte/store").Readable<boolean>;
        visible: import("svelte/store").Writable<boolean>;
        drawerId: import("svelte/store").Writable<string | undefined>;
        openDrawerIds: import("svelte/store").Writable<string[]>;
    };
    helpers: {
        getContentStyle: import("svelte/store").Readable<(style?: string | null | undefined) => string>;
    };
    methods: {
        closeDrawer: (withKeyboard?: boolean) => void;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        onPress: (event: import("../internal").SvelteEvent<PointerEvent, HTMLElement>) => void;
        onRelease: (event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>) => void;
        onDrag: (event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>) => void;
        scaleBackground: (open: boolean, backgroundColor?: string | undefined) => void;
        onNestedDrag: (_: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void;
        onNestedOpenChange: (o: boolean) => void;
        onNestedRelease: (_: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, o: boolean) => void;
        restorePositionSetting: () => void;
        openDrawer: () => void;
    };
    refs: {
        drawerRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        overlayRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        triggerRef: import("svelte/store").Writable<HTMLButtonElement | undefined>;
    };
    options: import("../internal/helpers").ToWritableStores<Omit<{
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: import("../internal/helpers").ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    } | {
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: string | number | null | undefined;
        onActiveSnapPointChange: import("../internal/helpers").ChangeFn<string | number | null> | undefined;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers").ChangeFn<boolean> | undefined;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string | undefined;
        scrollLockTimeout: number;
        fixed: boolean | undefined;
        dismissible: boolean;
        onDrag: ((event: import("../internal").SvelteEvent<TouchEvent | PointerEvent, HTMLElement>, percentageDragged: number) => void) | undefined;
        onRelease: ((event: import("../internal").SvelteEvent<TouchEvent | MouseEvent | PointerEvent, HTMLElement>, open: boolean) => void) | undefined;
        modal: boolean;
        nested: boolean;
        onClose: (() => void) | undefined;
    }, "defaultOpen" | "onOpenChange" | "defaultActiveSnapPoint" | "onActiveSnapPointChange" | "onDrag" | "onRelease" | "onClose">>;
};
