<script>
    import { BASE_URL } from "../../store/global.js";
    import { onMount } from "svelte";

    let coffeeLoverName
    
    //ville skabe et memory leak, fetch vil kaldes igen når man sætter noget
    //vi behøvede ikke unMount når man submitter coffeelover da den kun triggers når bruger 
    //trykker på en knap. Her sker det hele tiden, da fetch kaldes hver gang komponentet opdateres
    //sådan sker det i alle webframeworks. Muligvis kan svelte selv styre det, men i andre frameworks
    // er det et problem. I react får man en synlig fejl
    //når så unMount skal bruges her
    onMount(async() => {
        const response = await fetch($BASE_URL + "/api/coffeeLovers", {
            credentials: "include" //husk credentials include, så er det session vi får, session id
            // så får vi fat i den store der hører til den bruger, de routes hvor vi setter eller 
            //getter fra session brug credentials. Før var det fra session undefined
        })
        const result = await response.json()
        coffeeLoverName = result.data
    })
    //localstorage
    //hvad der er i store refresher store, store er i memory og det er bare ram 
    //som forsvinder når man reloader
    //gælder for alle webframeworks
    //løsning her er at vi fetcher hver gang man går ind i komponentet
    //man kan også bruge localstorage. Dog i localstorage må man absolut ikke gemme
    //sensitiv information. XSS kan tage info fra localstorage
    //fx ved loginsystem skal man ikke lægge isLoggedIn true i localstorage. Intet som
    //tjekker om de er logget ind. Tokens er ok, som databasen kan tjekke op imod om
    //man er logget ind. Men ellers så hav fetches som tjekker i backend om folk er logget ind

</script>

{#if !coffeeLoverName}
    <h1>Who dis?</h1>
{:else}
    <h1>{coffeeLoverName} loves dat coffee!</h1>
{/if}
