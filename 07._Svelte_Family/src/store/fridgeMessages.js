import { writable } from "svelte/store"
//stores kan være readable og writable, vil vil have at Child kan write og Parent kan slette dem
//fridge messages er ting der hænger på køeleskabet, tegninger

export const fridgeMessages = writable(["Fridge Messages Below"])
