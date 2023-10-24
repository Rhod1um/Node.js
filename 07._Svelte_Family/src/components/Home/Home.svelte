<script>
    import { fridgeMessages } from "../../store/fridgeMessages";
    //console.log($fridgeMessages) //dollar tegn giver værdien
</script>


<h2>=========================</h2>
{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage}</p>    
{/each}
<h2>=========================</h2>

<!--Home fil forvirre, fjern den evetuelt-->
<slot></slot> <!--denne viser ting fra App.svelte-->

<p>----------------------------------</p>
<p>|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|</p>
    <h3>Svelte Family Home</h3>
<p>|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|</p>
<p>----------------------------------</p>
