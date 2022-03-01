<script>
	import ArrowRightIcon from 'svelte-remixicon/lib/icons/ArrowRightFill.svelte';
	import ArrowLeftIcon from 'svelte-remixicon/lib/icons/ArrowLeftFill.svelte';
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Table Baby',
		description: 'Popi Creations Meuble unique Design Furniture Table Moderne Hetre Plexi Couleur'
	};
</script>

<div class="flex flex-col flex-grow">
	<div class="sm:min-w-prose flex-grow m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class="text-3xl uppercase text-center ">Table Baby</h1>

		<div class="text-center">
			<p>Hêtre - Plexi fluo - Alupanel - Multiplex bouleau - Verre</p>
			<p>40 x 46,5 x 36,5</p>
			<p class="text-gray-500">260€</p>
		</div>
		<img class="mt-20" src="baby-cote.webp" alt="baby-cote" />
		<img class="mb-40 mt-48" style="" src="baby-face.webp" alt="baby-face" />
		<img class="" src="baby-haut.webp" alt="baby-haut" />
		<img class="mt-40 mb-12 situation" src="baby-situation.webp" alt="baby-situation" />
		<div class="flex w-full justify-center items-center mb-3 ">
			<a class="/table-1" href="/table-2">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/commode">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: tomato;
	}
	.situation {
		@apply px-12;
	}
	img {
		@apply px-1;
	}
</style>
