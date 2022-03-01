<script>
	import ArrowRightIcon from 'svelte-remixicon/lib/icons/ArrowRightFill.svelte';
	import ArrowLeftIcon from 'svelte-remixicon/lib/icons/ArrowLeftFill.svelte';

	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Meuble Entree',
		description: 'Popi Creations Meuble unique Design Furniture Bleu Sapin Console'
	};
</script>

<div class="flex flex-col ">
	<div class="m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class=" text-3xl uppercase text-center mb-3">Console entrée</h1>
		<div>Sapin - Peuplier 86 x 86 x 12</div>
		<p class="text-gray-500">vendu</p>
		<img class="" src="entree-face.webp" alt="entree-face" />
		<img src="entree-haut.webp" alt="entree-haut" />
		<img class=" mt-16" style="" src="entree-cote.webp" alt="entree-cote" />
		<img class="mt-16 mb-6" src="entree-diag.webp" alt="entree-diag" />
		<div class="flex w-full justify-center items-center  ">
			<a class="/table-1" href="/banc">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/buffet">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: #f9b256;
	}
</style>
