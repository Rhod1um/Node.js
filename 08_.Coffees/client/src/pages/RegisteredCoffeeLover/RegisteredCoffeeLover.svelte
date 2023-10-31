<script>
    import { navigate } from "svelte-navigator";

    const coffeeLovername=""
    async function submitCoffeeLoverName(){
        const response = await fetch("http://localhost:8080/users/" + coffeeLovername {
            credentials: "include"
        })
        const result = await response.json()
        console.log(result)
        navigate("/whodatcoffeelover")
    }
</script>

<input bind:value={coffeeLovername}>
<button on:click={submitCoffeeLoverName}>Submit</button>