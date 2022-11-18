<script>
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Table Sunset',
		description: 'Popi Creations Meuble unique Design Furniture Table Moderne Hetre Plexi Couleur'
	};
</script>

<div class="flex flex-col ">
	<div class="sm:min-w-prose m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class="mx-auto text-3xl uppercase text-center mb-3">Tic</h1>
		<h2 class="mx-auto text-lg uppercase text-center mb-3">ÉTAGÈRE</h2>

		<div class="text-center flex flex-col justify-center">
			<p>Hêtre - Plexi fluo - Multiplex bouleau</p>
			<p>110 x 68 x 37</p>
			<p class="mt-6 text-gray-600">360€</p>
		</div>
		<img class="mt-32  situation" src="ticface.webp" alt="ticface" />
		<img class="mt-32 mb-12 situation" src="ticdiagonale.webp" alt="ticdiagonale" />
		<img class="" src="ticcote.webp" alt="ticcote-face" />
		<img class="mb-32 mt-32" style="" src="ticdetail.webp" alt="ticdetail" />
		<img class="mt-32 mb-12 situation" src="ticdetail2.webp" alt="ticdetail2" />
		<div class="flex w-full justify-center items-center mb-3">
			<a class="/creations" href="/creations">
				<img height="40" width="40" src="home.webp" alt="home" />
			</a>
			<a class="ml-auto" href="/sunset">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: rgb(224, 118, 118);
	}

	img {
		@apply px-1;
	}

	.situation {
		/* @apply px-12; */
	}
</style>
