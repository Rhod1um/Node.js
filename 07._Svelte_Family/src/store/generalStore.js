import { readable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");

//anden ting at bruge store til, fullstack kombineres med backend
//godt at have "globale" variabler her 

//readable kan ikke settes eller updates 