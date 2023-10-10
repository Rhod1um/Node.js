<script>
    import { fridgeMessages } from "../../store/fridgeMessages.js"

    console.log($fridgeMessages) //dollar tegn giver værdien
</script>

<h2>==========================</h2>
{#each fridgeMessages as message}
    <p>{message}</p>
{/each}
<h2>==========================</h2>


<h3>Svelte Family Home</h3>
<!--Home forvirre, fjern den evetuelt-->
<slot></slot> <!--denne viser ting fra App.svelte-->

<p>------------------------</p>
<p></p>
<p>------------------------</p>

