<script>
    import { createEventDispatcher } from "svelte";
    export let id, text, complete, purchasePrice, quantity;
    const dispatch = createEventDispatcher();
    function triggerUpdate() {
      dispatch("update", { id, text, complete, purchasePrice, quantity });
    }
    function handleDoubleClick() {
      const yes = confirm("Are you sure you wish to delete this item?");
      if (yes) {
        dispatch("delete", id);
      }
    }
  </script>
  
  <style>
    .item {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #ffffff;
    }
    .item:focus-within {
      background: rgba(255, 255, 255, 0.8);
    }
    .item.complete {
      background: #dddddd;
    }
    .item.complete .text-input {
      color: #666666;
      text-decoration: line-through;
    }
    .text-input {
      flex-grow: 1;
      background: none;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 1em;
    }
    .complete-checkbox {
      margin-left: 15px;
    }
  </style>
  
  <div class="item" class:complete on:dblclick={handleDoubleClick}>
    <input
      class="text-input"
      type="text"
      bind:value={text}
      readonly={complete}
      on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
      on:blur={() => triggerUpdate()} />
    
      <input
      class="text-input"
      type="number"
      placeholder="Enter quantity"
      bind:value={quantity}
      readonly={complete}
      on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
      on:blur={() => triggerUpdate()} />

      <input
      class="text-input"
      type="number"
      placeholder="Enter purchase price"
      bind:value={purchasePrice}
      readonly={complete}
      on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
      on:blur={() => triggerUpdate()} />
  </div>