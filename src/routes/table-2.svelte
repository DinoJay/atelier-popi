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
		<h1 class="mx-auto text-3xl uppercase text-center mb-3">grande soeur</h1>
		<h2 class="mx-auto text-lg uppercase text-center mb-3">Table basse</h2>
		<div class="text-center">
			<p>Hêtre - Plexi fluo - Alupanel - Multiplex bouleau - Verre</p>
			<p>40 x 70,5 x 46,5</p>
			<p class="mt-6 text-gray-600 text-justify">
				Avec pour point de départ trois morceaux de verres identiques, j’ai créé une petite table et
				son double qui vont ensemble ou séparément. Rehaussée par des touches de couleurs avec
				l’Alupanel jaune et le plexiglass rouge (qui est rappelé dans la rainure peinte pour la
				vitre), la forme est dans l’ouverture et la circulation de l’espace.
			</p>
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
			<a class="/creations" href="/sunset">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
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
