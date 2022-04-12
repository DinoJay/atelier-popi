<script>
	import ArrowLeftIcon from 'svelte-remixicon/lib/icons/ArrowLeftFill.svelte';
	import HomeIcon from 'svelte-remixicon/lib/icons/Home2Fill.svelte';
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Buffet',
		description: 'modulable Buffet Popi Creations Meuble unique Design Furniture Multiplex'
	};
</script>

<div class="flex flex-col ">
	<div class="m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class=" text-3xl uppercase text-center mb-3">CLAPIER</h1>
		<h2 class=" text-lg uppercase text-center mb-3">Buffet</h2>
		<div>Multiplex bouleau - Sapin</div>
		<div>160 x 120 x 37,5</div>
		<p class="mt-6 text-gray-600 text-justify">
			Mettre en avant le tourillon. Ce morceau de bois, généralement caché dans le montage d’un
			meuble, sert a assembler deux parties entre elles ( je m’en sert beaucoup). Ici il est coloré
			et sert à faire les faces des portes coulissantes qui se croisent de manière graphique. Puis
			il sert en traversant les montants à tenir les étagères qui peuvent ainsi être amovibles.
		</p>
		<img class="mb-40" src="buffet-cote.png" alt="buffet cote" />
		<img class="mb-60" src="buffet-grille.png" alt="buffet grille" />
		<img class="mb-20" src="buffet-detail.png" alt="buffet detail" />
		<div class="flex w-full items-center ">
			<a class="/table-2" href="/meuble-entree">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/creations">
				<img height="40" width="40" src="home.webp" alt="home" />
			</a>
		</div>
	</div>
</div>

<style>
	img {
		@apply px-1;
	}
	h1 {
		color: #f82f4e;
	}
</style>
