<script>
	import HeaderGoals from "./components/HeaderGoals.svelte";
	import ListGoals from "./components/List.svelte";
	import HeaderHoldings from "./components/HeaderHoldings.svelte";
	import ListHoldings from "./components/ListHoldings.svelte";
  </script>
  
  <style>
	.container {
	  width: 1000px;
	  background: #009579;
	}
	:global(.container *) {
	  font-family: "Quicksand", sans-serif;
	}
  </style>
  
  <div class="container">
	<HeaderHoldings />
	<ListHoldings />
	<HeaderGoals />
	<ListGoals />
  </div>