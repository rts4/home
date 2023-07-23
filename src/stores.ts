import { writable } from "svelte/store";

const lastPage = writable(1);

export { lastPage }