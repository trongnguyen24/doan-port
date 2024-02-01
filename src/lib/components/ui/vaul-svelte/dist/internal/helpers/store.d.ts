/// <reference types="svelte" />
import type { Readable, Stores, StoresValues, Updater, Writable } from "svelte/store";
/**
 * A utility function that creates an effect from a set of stores and a function.
 * The effect is automatically cleaned up when the component is destroyed.
 *
 * @template S - The type of the stores object
 * @param stores - The stores object to derive from
 * @param fn - The function to run when the stores change
 * @returns A function that can be used to unsubscribe the effect
 */
export declare function effect<S extends Stores>(stores: S, fn: (values: StoresValues<S>) => (() => void) | void): () => void;
/**
 * A utility function that creates a derived store that automatically
 * unsubscribes from its dependencies.
 *
 * @template S - The type of the stores object
 * @template T - The type of the derived store
 * @param stores - The stores object to derive from
 * @param fn - The function to derive the store from
 * @returns A derived store that automatically unsubscribes from its dependencies
 */
export declare function derivedWithUnsubscribe<S extends Stores, T>(stores: S, fn: (values: StoresValues<S>, onUnsubscribe: (cb: () => void) => void) => T): Readable<T>;
export declare const safeOnMount: (fn: (...args: unknown[]) => unknown) => unknown;
export declare const safeOnDestroy: (fn: (...args: unknown[]) => unknown) => unknown;
export type ChangeFn<T> = (args: {
    curr: T;
    next: T;
}) => T;
export declare const overridable: <T>(store: Writable<T>, onChange?: ChangeFn<T> | undefined) => {
    update: (updater: Updater<T>, sideEffect?: ((newValue: T) => void) | undefined) => void;
    set: (this: void, value: T) => void;
    subscribe(this: void, run: import("svelte/store").Subscriber<T>, invalidate?: import("svelte/store").Invalidator<T> | undefined): import("svelte/store").Unsubscriber;
};
export type ToWritableStores<T extends Record<string, unknown>> = {
    [K in keyof T]: Writable<T[K]>;
};
/**
 * Given an object of properties, returns an object of writable stores
 * with the same properties and values.
 */
export declare function toWritableStores<T extends Record<string, unknown>>(properties: T): ToWritableStores<T>;
