<script>
	import { onMount } from 'svelte';

	let url = 'http://localhost:3333';
	let qString =
		'?sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD';

	onMount(async () => {
		try {
			const pingRes = await fetch(url + '/ping');
			const ping = await pingRes.json();
			console.log({ ping });
			const coinRes = await fetch(url + '/coincap' + qString);
			const data = await coinRes.json();
			console.log({ data });
		} catch (error) {
			console.error(error);
		}
	});
</script>
