<script>
    import { BASE_URL } from "../../store/global.js"
    import { navigate } from "svelte-navigator"
    let coffeeLoverName = "";
    console.log(`${BASE_URL}`)

    async function submitCoffeLoverName() {
        const response = await fetch($BASE_URL + "/api/coffeeLovers", {
            credentials: "include",  //credentials include skal med ellers cors fejl
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({coffeeLover: coffeeLoverName})
            //stringify når man sender men behøver ikke passe ved tilbage
            //AJAX er bedre end fetch ifølge Anders, der var det her en one liner
        })
        //const result = await response.json()
        console.log(response) //status 200 er cors fejl her hvis vi ikke havde headers med include, post
        if (response.status === 200){ //redirecter hvis ok
            navigate("/whodatcoffeelover")
        }
    }
</script>

<input bind:value={coffeeLoverName} />
<button on:click={submitCoffeLoverName}>Submit your name</button>
