<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
  import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
  import RegisterCoffeeLoverSSR from "./pages/RegisterCoffeeLoverSSR/RegisterCoffeeLoverSSR.svelte";
  import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";
  import WhoDatCoffeeLoverSSR from "./pages/WhoDatCoffeeLoverSSR/WhoDatCoffeeLoverSSR.svelte";

  //den her komponents ansavr er kun at route

  //dist filen bygges én gang, derfor ses <h1>Hello everyone</h1> ikke
  //build igen. Nu har vi lavet build script i package.json
</script>

<h1>Hello everyone</h1>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/coffeetypes">Coffee Overview</Link>
    <!--er bare links, uden dem er routes nedenunder
    kunne bare bruge anchor tag men Link er smartere. Uden nav her kan man acess routes på url men uden link-->
    <Link to="/registercoffeelover">Register Coffee Lover</Link>
    <Link to="/registercoffeeloverSSR">Register Coffee Lover SSR</Link>

    <Link to="/whodatcoffeelover">WhoDatCoffeeLover</Link>
    <Link to="/whodatcoffeeloverSSR">WhoDatCoffeeLover SSR</Link>

  </nav>
  <!--vi er kun i én page, SPA-->

  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/coffeetypes"><CoffeeOverview /></Route>
    <Route path="/registercoffeelover"><RegisterCoffeeLover /></Route>
    <Route path="/registercoffeeloverSSR"><RegisterCoffeeLoverSSR /></Route>
    <Route path="/whodatcoffeelover"><WhoDatCoffeeLover /></Route>
    <Route path="/whodatcoffeeloverSSR"><WhoDatCoffeeLoverSSR /></Route>

  </div>
</Router>
<!--lige nu kan alle tilgå de routes, i mandatory 2 skal man lave authorisation, kun
nogle må få adgang, bruger er i store og den tjekker om brugeren er der-->
