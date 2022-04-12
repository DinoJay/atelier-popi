<script>
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Atelier Popi - Accueil',
		description: 'Popi Creations Meuble unique Design Furniture Atelier'
	};
</script>

<div class="md:flex md:p-0 p-3 md:justify-center">
	<a class="creationsk flex flex-col mb-3 sm:mb-0 " href="/creations">
		<div class="flex items-center justify-center flex-grow">
			<div class="creations-text absolute m-auto  text-white font-sans uppercase">CRÉATION</div>
			<img style="w-full h-full" src="creations.webp" alt="creations" />
		</div>
	</a>
	<a class="collab md:p-3 " href="/mini_series">
		<div class="flex items-center justify-center  ">
			<div class="collab-text absolute m-auto font-sans uppercase text-white">Mini series</div>
			<img src="mini_series.webp" alt="slash" />
		</div>
	</a>
</div>

<style>
	.creationsk {
		min-width: 50%;
	}
	.collab {
		min-width: 50%;
	}

	.collab-text {
		font-size: 4rem;
	}
	.creations-text {
		font-size: 4rem;
	}
</style>
