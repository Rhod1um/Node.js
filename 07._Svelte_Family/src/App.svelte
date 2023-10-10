<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  const parents = ["Anders", "Karoline"];
  const children = [
    {
      name: "Gustav",
      blackSheep: "medium-black-sheep",
    },
    {
      name: "Sarah",
      isGirl: true,
    },
    {
      name: "Alexander",
      blackSheep: "ultra-black-sheep",
    },
  ];
</script>

<h4>Welcome message above the door</h4>

<Home>
  <h4>Svelte family</h4>

  <Parent name={parents[0]} myChildren={children}/> <!--children er array i denne fil og {children er fra Child}-->
  <Parent name={parents[1]} myChildren={children}/> <!--myChildren er i Parent-->

  <!--
  {#each parent as parent}
    <h1>{parent}</h1>
  {/each}

  {#each parents as parent} han kalder parent parentName
    <Parent name={parent} children={children}/>
  {/each}
-->
</Home>



