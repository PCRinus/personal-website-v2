import { writable } from 'svelte/store';

export const language = writable('en');
export const theme = writable('light');
export const mobileNavMenu = writable('hidden');
