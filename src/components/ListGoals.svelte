<script>
    import { onMount } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import { goalItems } from "../stores";
    import GoalsApi from "../GoalsApi";
    import ItemGoals from "./ItemGoals.svelte";
    import NewItem from "./NewItem.svelte";
    /**
     * Add new item to list and save to API.
     */
    function handleNewItem({ detail: text }) {
      $goalItems = [
        {
          id: uuidv4(),
          text,
          complete: false,
        },
        ...$goalItems,
      ];
      GoalsApi.save($goalItems);
    }
    /**
     * Update store with new data and save to API.
     */
    function handleUpdate({ detail }) {
      const index = $goalItems.findIndex((item) => item.id === detail.id);
      $goalItems[index] = detail;
      GoalsApi.save($goalItems);
    }
    /**
     * Delete item by ID from the store and save to API.
     */
    function handleDelete({ detail: id }) {
      $goalItems = $goalItems.filter((item) => item.id !== id);
      GoalsApi.save($goalItems);
    }
    let GoalsSorted = [];
    $: {
      GoalsSorted = [...$goalItems];
      GoalsSorted.sort((a, b) => {
        if (a.complete && b.complete) return 0;
        if (a.complete) return 1;
        if (b.complete) return -1;
      });
    }
    onMount(async () => {
      $goalItems = await GoalsApi.getAll();
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
    {#each GoalsSorted as item (item)}
      <ItemGoals {...item} on:update={handleUpdate} on:delete={handleDelete} />
    {:else}
      <p class="list-status">No goals have been set</p>
    {/each}
  </div>