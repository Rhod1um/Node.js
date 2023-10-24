<script>
  import { Router, Link, Route } from 'svelte-navigator'
  import Home from './pages/Home/Home.svelte'
  import CoffeeFacts from './pages/CoffeeFacts/CoffeeFacts.svelte';
  import CoffeeOverview from './pages/CoffeeOverview/CoffeeOverview.svelte';
  //den her komponents ansavr er kun at route
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/coffeetypes">Coffee Overview</Link>
    <Link to="/coffeefacts">Coffee facts</Link> <!--er bare links, uden dem er routes nedenunder
    kunne bare bruge anchor tag men Link er smartere. Uden nav her kan man acess routes på url men uden link-->
  </nav> <!--vi er kun i én page, SPA-->

  <div>
    <Route path="/" component="{Home}">
      <Link to="/coffeetypes"><CoffeeOverview /></Link>
      <Link to="/coffeefacts"><CoffeeFacts /></Link>

    </Route>
  </div>

</Router>
<!--lige nu kan alle tilgå de routes, i mandatory 2 skal man lave authorisation, kun
nogle må få adgang, bruger er i store og den tjekker om brugeren er der-->