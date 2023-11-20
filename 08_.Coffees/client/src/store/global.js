import { readable } from 'svelte/store'

//husk export for at kunne bruge den
export const BASE_URL = readable("http://localhost:8080")


//writable stores har set og get og subscribe, readable har kun subscribe