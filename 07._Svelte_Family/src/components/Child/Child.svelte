<script>
    export let child
    export let onShowLove //props tages ind, handleShowLove
    export let onEatCookie

    import {fridgeMessages} from "../../store/fridgeMessages.js" //også navnekonventio at kalde det noget med store

    let customFridgeMessage = ""

    function submitFridgeMessage(){
        //fridgeMessages.set([customFridgeMessage]) gør vi ikke fordi så er der kun en message submit ad gangen
        fridgeMessages.update(storeValue => { //update er bedre end ovenstående da den tager cllbackfukntio 
            console.log(storeValue)
            storeValue.push(customFridgeMessage)
            return storeValue
        })
        //fridgeMessages.set([...$fridgeMessages, customFridgeMessage]) gør det samme som ovenstående
        customFridgeMessage = "" //sletter den efter den er outputtet så den ikke bliver i input feltet
        //alternativ til placeholders, hvilket ville være bedre. altså nu fjernes input message ikke når man submitter
    }
</script>

<button on:click={onShowLove}>heart</button> <!--kalder funktionsreference som Child har fået fra Parent-->
<button on:click={() => onShowLove(child.name)}>heart</button>  <!--send data med til fkt-->

<input bind:value={customFridgeMessage}> <!--bind - når man skriver i inputfeltet så opdateres custimFridgeMessage, det er som onChangeText i react native-->
<button on:click={submitFridgeMessage}>Submit fridge message</button>

<button on:click={onEatCookie}>Eat cookie</button>

<div 
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}  
> <!--afhænding af barnet, conditionally render css, boolean værdier ovenover-->
    <h3>{child.name}</h3>
</div>

<style>
    .is-boy {
        border: 1px solid pink;
    }
    .isGirl {
        border: 1px solid blue;
    }
    .not-a-black-sheep {
        background-color: aquamarine;
    }
    .medium-black-sheep {
        background-color: green;
    }
    .ultra-black-sheep {
        background-color: red;
    }
</style>