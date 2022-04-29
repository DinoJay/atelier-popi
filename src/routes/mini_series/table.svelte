<script>
	import { seo } from '$lib/store.js';
	import LightBox from '$lib/LightBox.svelte';

	$seo = {
		title: 'Table',
		description:
			'Artiste Popi Creations Meuble unique Design Furniture mini-series multidisciplinaire'
	};
	const imgs = [
		['/tableahut.webp', 'tableahaut'],
		['/detail1.webp', 'table detail 1'],
		['/detail2.webp', 'table detail 2'],
		['/tablecentre.webp', 'table detail 2']
	];
</script>

<div class=" p-3  md:p-12 items-center md:items-start">
	<div class="">
		<h1 class="text-3xl mb-1">Marée basse</h1>
		<h2 class="mb-2">Table basse</h2>
		<div class="text-justify text-sm text-gray-600 ">
			<p class="">Gravure des formes à la CNC, marqueterie de laiton</p>
			<p class="">Multiplex bouleau - hêtre - epoxy - laiton</p>
			<p>200€/table - dispo: 3</p>
			<p>(en vente à partir du 30/04/2022 Chaussee de Wavre 331 Bruxelles)</p>
		</div>
	</div>
	<div class="flex flex-col md:flex-row md:mt-12">
		<div class="order-1 grid md:mr-24 gap-4 grid-cols-2 grid-rows-2">
			{#each imgs as s, i}
				<LightBox srcs={imgs} start={i} className="h-40 object-contain" />
			{/each}
		</div>
		<img
			class="mini-series-table-mobile md:mini-series-table-desktop order-0 md:order-last mb-3 md:mb-0 max-w-series "
			src="/table_plan.webp"
		/>
	</div>
</div>

<style>
</style>
