import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<boolean>} */
export const isDarkMode = writable(false);
