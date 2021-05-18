<script>
    import { onMount } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import { holdingsItems } from "../stores";
    import HoldingsApi from "../HoldingsApi";
    import ItemHoldings from "./ItemHoldings.svelte";
    import NewItem from "./NewItem.svelte";
    /**
     * Add new item to list and save to API.
     */
    function handleNewItem({ detail: text }) {
      $holdingsItems = [
        {
          id: uuidv4(),
          text,
          complete: false,
        },
        ...$holdingsItems,
      ];
      HoldingsApi.save($holdingsItems);
    }
    /**
     * Update store with new data and save to API.
     */
    function handleUpdate({ detail }) {
      const index = $holdingsItems.findIndex((item) => item.id === detail.id);
      $holdingsItems[index] = detail;
      HoldingsApi.save($holdingsItems);
    }
    /**
     * Delete item by ID from the store and save to API.
     */
    function handleDelete({ detail: id }) {
      $holdingsItems = $holdingsItems.filter((item) => item.id !== id);
      HoldingsApi.save($holdingsItems);
    }
    let holdingsSorted = [];
    $: {
      holdingsSorted = [...$holdingsItems];
      holdingsSorted.sort((a, b) => {
        if (a.complete && b.complete) return 0;
        if (a.complete) return 1;
        if (b.complete) return -1;
      });
    }
    onMount(async () => {
      $holdingsItems = await HoldingsApi.getAll();
    });
  </script>
  
  <style>
    .list {
      padding: 15px;
    }
    .list-status {
      margin: 0;
      text-align: center;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.1em;
    }
  </style>
  
  <div class="list">
    <NewItem on:newitem={handleNewItem} />
    {#each holdingsSorted as item (item)}
      <ItemHoldings {...item} on:update={handleUpdate} on:delete={handleDelete} />
    {:else}
      <p class="list-status">You haven't entered any crypto holdings</p>
    {/each}
  </div>