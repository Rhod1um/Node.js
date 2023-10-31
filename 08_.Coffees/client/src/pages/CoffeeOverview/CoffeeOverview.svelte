<script>
    import { onMount } from 'svelte'
    let coffees = []
    fetch("localhost:8080/coffees") //localhost er i store

    //fetch skal kun kaldes en gang, når componentet mounter
    onMount(async () => {
        const response = await fetch("https://localhost:8080/coffees")
        const result = await response.json()
        coffees = result.data
        console.log(result)
    })
    //cors fejl, meget skræmmende , anders ksulle skrive http foran loclahost
    //cores er sikkergedsmekansme som browsere startede på at implememntere i 2016
    //vildt irriterende for udviklere men forhindre fx clickjacking
    //man kan ikke interagere med side som har anden origin end originalsiden
    //side om cors han ladgde op viser to eksmepler på at løse cors, import og boilerplate
    // npm i cors i server mappe
    //satte cors op i app.js i server så forsvinder cors fejl
</script>

<h1>selection ...</h1>

{#each coffees as coffee}
    <h3>{coffee}</h3>
{/each}

