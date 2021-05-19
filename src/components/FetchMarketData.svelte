<script>

import { onMount } from "svelte";

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
let apiKey = "51b1c9b4-55a0-47f7-8e47-8bd80ddf6173"
let qString ="?CMC_PRO_API_KEY=" + apiKey + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD";
let fetchedCoinData = [];
  
onMount(async () => {
    const res = await fetch(url + qString);     fetchedCoinData = await res.json();  });
</script>

<div>
    <h1>Test data dump</h1>
    {#each fetchedCoinData as coinDataItem}
         <li>{coinDataItem.id}</li> 
   {:else}
     <!-- this block renders when users.length === 0 -->
      <p>loading...</p>
   {/each}
</div>
 