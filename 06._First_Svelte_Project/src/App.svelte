<script>
    import Traktor from "./lib/Traktor.svelte";
    import Ground from "./lib/Ground.svelte";
    import Farmer from "./lib/Farmer.svelte";
  console.log("hello")

  const wheels = ["wheel", "wheel", "wheel", "wheel"]
  const showTraktor = true //måde at conditionally render
  const welcomeMessage = "Welcome to our first project"

  const name = "Farmer John"
</script>
<h1 id="welcome-message">{welcomeMessage}</h1>
<h2>This is the main component</h2>

<Farmer name={name}/> <!--kun name her giver true ford den har name property. {name} og name={name} er det samme, så er key automatisk samme navn-->


{#if showTraktor}
<Traktor wheels={wheels}/>
<Ground />
{/if}

<style>
  /*app.css injectes i import './app.css'
 her er for specifik side css*/
  #welcome-message {
    color: red;
  }
</style>