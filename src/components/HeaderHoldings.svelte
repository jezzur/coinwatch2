<script>
    import { holdingsItems } from "../stores";
    $: itemCount = $holdingsItems.length;
    
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
    <div>Crypto Holdings</div>
    <span> {itemCount} </span>
  </div>