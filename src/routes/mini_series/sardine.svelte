<script>
	import { seo } from '$lib/store.js';
	import LightBox from '$lib/LightBox.svelte';

	$seo = {
		title: 'Sardine',
		description:
			'Artiste Popi Creations Meuble unique Design Furniture mini-series multidisciplinaire'
	};
	const imgs = [
		['/sardine.webp', 'sardine'],
		['/sardinecote.webp', 'sardine cote 1'],
		['/sardineface.webp', 'sardine face'],
		['/sardine-detail.webp', 'sardine detail']
	];
</script>

<div class=" p-3  md:p-12 items-center md:items-start">
	<div class="">
		<h1 class="text-3xl mb-1">Sardines aux tomates</h1>
		<h2 class="mb-2">Tabouret ou table d’appoint</h2>
		<div class="text-justify text-sm text-gray-600 ">
			<p class="">Gravure des formes à la CNC, résine coulée en creux</p>
			<p class="">Multiplex bouleau - epoxy - pieds en acier laqué jaune</p>
			<p class="">Choix de la hauteur des pieds</p>
			<p>105€ - disponible sur commande</p>
		</div>
	</div>
	<div class="flex flex-col md:flex-row md:mt-12">
		<div class="order-1 grid md:mr-24 gap-4 grid-cols-2 grid-rows-2">
			{#each imgs as s, i}
				<LightBox srcs={imgs} start={i} style="width:10rem" className="h-40  object-cover" />
			{/each}
		</div>
		<img
			class="mini-series-table-mobile md:mini-series-table-desktop order-0 md:order-last mb-3 md:mb-0 max-w-series "
			src="/mesure.webp"
			alt="mesure"
		/>
	</div>
</div>

<style>
</style>
