<script>
    import { onMount } from "svelte"

    let coffees = []

    //fetch("localhost:8080/coffees") //localhost er i store

    // fetch skal kun kaldes en gang, når componentet mounter
    //Component states: mounting, updating, unmounting: https://www.google.com/search?q=livecycle+event+react&tbm=isch&ved=2ahUKEwixuMLqiKCCAxUshv0HHUCTCTwQ2-cCegQIABAA&oq=livecycle+event+react&gs_lcp=CgNpbWcQAzoECCMQJ1D6AVj6GmCvImgAcAB4AIABWIgB_QGSAQEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=u9VAZfHuL6yM9u8PwKam4AM#imgrc=0o_wVyPS2NHY2M
    onMount(async () => {
        const response = await fetch("http://localhost:8080/coffees");
        const result = await response.json();
        coffees = result.data;
    })
    // cors fejl, meget skræmmende, Anders skulle skrive http foran localhost
    // cors er sikkerhedsmekanisme som browsere startede på at implememntere i 2016
    // vildt irriterende for udviklere men forhindre fx clickjacking
    // man kan ikke interagere med side som har anden origin end originalsiden
    // side om cors, cors.svg, han ladgde op viser to eksmepler på at løse cors, import og boilerplate
    // 'npm i cors' i server mappe
    // satte cors op i app.js i server så forsvinder cors fejl
</script>

<h1>Coffee Selection...</h1>

{#each coffees as coffee}
    <h3>{coffee}</h3>    
{/each}

