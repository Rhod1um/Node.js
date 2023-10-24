<script>    
    export let name
    export let myChildren //skal have adgang til børnene så forældrene kan genererer børnene
    
    import Child from "../Child/Child.svelte";
    //send data ned til children fra parent gennem props
    import { fridgeMessages } from "../../store/fridgeMessages";

    //opgave, ting bliver først lagt i parent component og så videregivet child
    //handle i parent, on i child
    let cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handleShowLove(childName) {
        console.log(`My name is ${name} and ${childName} loves me.`) //sendes ned som props, key i Child
    }

    function fillCookieJar() { //ikke handler, det er ikke en handler for videregives ikke til Child
        cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"] //er internal funktion
    }

    function handleEatCookie() {
        cookieJar.pop  //problemet med pop er at cookieJar ar den ikke vises med ændringer på siden 
        cookieJar = cookieJar  //nu er variablen reactive, hvis dette ikke gøres så overskriver den originale cookieJar som blev initialiseret ovenover den nye array. Man kan ogsp bruge spread operator til dette
        console.log("Ate a cookie") //kun i konsollen. Det fordi array ikke er react dev
        if (cookieJar.length === 0){
            fillCookieJar()
        }
    }

    function eraseFridgeMessages() {
        fridgeMessages.set(["Fridge Messages Below"]);
    }

</script>

<!--det her er som react native, js øverst og return XJS, her uden return keyword-->

<p>{name}</p>
<!--<p>{children}</p> kan man ikke, giver Objjekt, der laves Child objekt som har child prop-->

<p>{cookieJar}</p>

<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>
<br>
<br>

<!--vi viser hver barn under hver forælre så hvert barn vises to gange-->
{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/> <!--key er funktionsreferene til handleShowLove-->
{/each} <!--det er her onShowLove={handleShowLove} at parent og child prop connectes 

vi har importeret Child objekt og vi sætter dens prop til vores handler fkt-->
