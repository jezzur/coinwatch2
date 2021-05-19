import { writable } from "svelte/store";

// Stores each To-Do list item
export const goalItems = writable([]);
export const holdingsItems = writable([]);
export const fetchedCoinData = writable([]);
export const timeout = writable(false);