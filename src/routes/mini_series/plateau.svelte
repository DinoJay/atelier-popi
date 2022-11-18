<script>
	import { seo } from '$lib/store.js';
	import LightBox from '$lib/LightBox.svelte';

	$seo = {
		title: 'Collaboration',
		description:
			'Artiste Popi Creations Meuble unique Design Furniture mini-series multidisciplinaire'
	};

	const imgs = [
		['/plateauface.webp', 'table detail 0'],
		['/plateaufacejaune.webp', 'table detail 1'],
		['/plateaucote.webp', 'table detail 2'],
		['/plateau2.webp', 'table detail 3'],
		['/plateaudouble.webp', 'table detail 4']
	];
</script>

<div class=" p-3  md:p-12 flex flex-col ">
	<div class="">
		<h1 class="text-3xl mb-1">Tableau</h1>
		<h2 class="mb-2">Plateau</h2>
		<div class="text-justify text-sm text-gray-600 ">
			<p class="">Gravure des formes à la CNC, marqueterie de laiton.</p>
			<p class="">Multiplex bouleau - epoxy - laiton</p>
			<p>50€/plateau - SOLD OUT</p>
		</div>
	</div>
	<div class="flex flex-col md:flex-row md:mt-12 ">
		<div class="order-1 grid md:mr-12 gap-4 grid-cols-2 grid-rows-3 ">
			{#each imgs as s, i}
				<LightBox srcs={imgs} start={i} className="h-40 object-contain" />
			{/each}
		</div>
		<img
			class="order-0 mb-3 md:mb-0 md:order-last max-w-series mini-series-tableau-mobile md:mini-series-tableau-desktop"
			src="/plateau_plan.webp"
		/>
	</div>
</div>
