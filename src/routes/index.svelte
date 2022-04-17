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
			<div class="creations-text absolute m-auto  text-white font-sans uppercase">CRÉATIONS</div>
			<img class="w-full h-full" src="creations.webp" alt="creations" />
		</div>
	</a>
	<a class="sm:ml-3 collab flex flex-col  mb-3 sm:mb-0" href="/mini_series">
		<div class="flex items-center justify-center  flex-grow relative">
			<img class="h-full" src="mini_series.webp" alt="mini series" />
			<div
				class="collab-text absolute m-auto font-sans uppercase text-center text-white max-width-half sm:max-w-none"
			>
				Mini-Séries
			</div>
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
