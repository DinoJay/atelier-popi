<script>
	import ArrowRightIcon from 'svelte-remixicon/lib/icons/ArrowRightFill.svelte';

	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Table Grande Soeur',
		description: 'Popi Creations Meuble unique Design Furniture Table Moderne Hetre Plexi Couleur'
	};
</script>

<div class="flex flex-col ">
	<div class="sm:min-w-prose m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class="mx-auto text-3xl uppercase text-center mb-3">Table grande soeur</h1>

		<div class="text-center">
			<p>Hêtre - Plexi fluo - Alupanel - Multiplex bouleau - Verre</p>
			<p>40 x 70,5 x 46,5</p>
			<p class="text-gray-500">420€</p>
		</div>
		<img class="mt-20" src="grandesoeur-face.webp" alt="grandesoeur-face" />
		<img class="mb-40 mt-48" style="" src="grandesoeur-cote.webp" alt="grandesoeur-cote" />
		<img class="" src="grandesoeur-haut.webp" alt="grandesoeur-haut" />
		<img
			class="mt-40 mb-12 situation"
			src="grandesoeur-situation.webp"
			alt="grandesoeur-situation"
		/>
		<div class="flex w-full justify-center items-center mb-3">
			<a class="/creations" href="/creations">
				<img height="40" width="40" src="home.webp" alt="home" />
			</a>
			<a class="ml-auto" href="/table-1">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: dodgerblue;
	}

	img {
		@apply px-1;
	}

	.situation {
		@apply px-12;
	}
</style>
