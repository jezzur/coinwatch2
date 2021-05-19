<script>
    import { goalItems } from "../stores";
    $: itemCount = $goalItems.length;
    $: completedItemCount = $goalItems.filter((item) => item.complete).length;
  </script>
  
  <style>
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      color: #eeeeee;
      font-weight: bold;
      font-size: 1.5em;
      background: rgba(0, 0, 0, 0.1);
    }
  </style>
  
  <div class="header">
    <div>Crypto Goals</div>
    <span> {completedItemCount}/{itemCount} </span>
  </div>