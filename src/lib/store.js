import { writable } from "svelte/store";

export const seo = writable({
    title: "Atelier Popi", // default title
    description: "This is a description of my website" // default description
})