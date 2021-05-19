<script>

import { onMount } from "svelte";

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
let apiKey = "51b1c9b4-55a0-47f7-8e47-8bd80ddf6173"
let qString ="?CMC_PRO_API_KEY=" + apiKey + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD";

fetch('url + qString')
  .then(response => response.json())
  .then(data => console.log(data));



</script>
 