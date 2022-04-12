<script>
	import ArrowRightIcon from 'svelte-remixicon/lib/icons/ArrowRightFill.svelte';
	import ArrowLeftIcon from 'svelte-remixicon/lib/icons/ArrowLeftFill.svelte';
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Accueil',
		description:
			'Popi Creations Meuble unique Design Furniture Marqueterie Multiplex Laiton Chaine Oak Modulable Montagne'
	};
</script>

<div class="flex flex-col ">
	<div class="m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class=" text-3xl uppercase text-center mb-3">EVEREST</h1>
		<h2 class=" text-lg uppercase text-center mb-3">Commode</h2>
		<div>Chêne - Multiplex bouleau - Laiton</div>
		<div>91 x 100 x 33,5</div>
		<p class="mt-6 text-gray-600 text-justify">
			Moderniser la marqueterie par un dessin s’étalant sur les quatre portes en laiton incrusté.
			Des faces de tiroirs qui ne sont plus pleines mais ajourées avec des tiges pour tourillons
			teintées et qui sont rappelées au niveau des assemblages de la partie basse. Une partie haute
			et une partie basse qui sont séparables. La composition du meuble peut être modifiée selon
			l’espace, le gout ou l’envie d’un peu de changement.
		</p>
		<img class="mb-40 mt-20" style="" src="everest-face.png" alt="everest face" />
		<img class="mb-40" src="everest-cote2.png" alt="everest cote 2" />
		<img class="mb-40" src="everest-detail.png" alt="everest detail" />
		<img class="mb-40" src="everest-detail2.png" alt="everest detail 2" />
		<img class="mb-40" src="everest-double.png" alt="everest double" />
		<img class="mb-12" src="everest-detail3.png" alt="everest detail" />
		<div class="flex w-full justify-center items-center">
			<a class="/table-1" href="/table-1">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/table-bleu">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: lightskyblue;
	}
	img {
		@apply px-1;
	}
</style>
