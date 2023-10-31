<script>
    import { onMount } from "svelte"

    let coffeeLoverName=""
    onMount(async() => {
        const response = await fetch("http://localhost:8080/users", {
            credentials: "include"
        })
        const result = await response.json()
        coffeeLoverName
    })
    //ved alle fetches skal den have credentials include, er gjort i app.js at den kan det
</script>

<h1>{coffeeLoverName} loves dat coffee"</h1>