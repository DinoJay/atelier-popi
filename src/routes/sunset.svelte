<script>
	import ArrowRightIcon from 'svelte-remixicon/lib/icons/ArrowRightFill.svelte';

	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Table Sunset',
		description: 'Popi Creations Meuble unique Design Furniture Table Moderne Hetre Plexi Couleur'
	};
</script>

<div class="flex flex-col ">
	<div class="sm:min-w-prose m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class="mx-auto text-3xl uppercase text-center mb-3">Sunset</h1>
		<h2 class="mx-auto text-lg uppercase text-center mb-3">Table basse</h2>

		<div class="text-center">
			<p>Hêtre - Plexi fluo - Multiplex bouleau - Verre armé</p>
			<p>40,2 x 89 x 44,7</p>
			<p class="mt-6 text-justify text-gray-600">
				Le plexiglass fluorescent réfléchit de manière tellement intense la lumière sur son chant ou
				dans les parties creusées que ça en est presque surnaturel. Chaque rectangle est gravé d’une
				vue panoramique du Mont Blanc différente. La réflexion de la lumière, particulièrement en
				fin de journée dans ces plexi orange et rouge-rose, retranscrit parfaitement ces couleurs
				qui colorent les sommets des montagnes au coucher du soleil. Le choix d’un verre armé permet
				de « cacher » un peu l’intèrieur mais de laisse quand même passer de la lumière.
			</p>
		</div>
		<img class="mt-20" src="sunset.webp" alt="sunset" />
		<img class="" src="sunsetface.webp" alt="sunset-face" />
		<img class="mb-40 mt-48" style="" src="sunsetcote.webp" alt="sunset-cote" />
		<img class="mt-40 mb-12 situation" src="sunsethaut.webp" alt="sunset-haut" />
		<img class="mt-40 mb-12 situation" src="sunsetdetail.webp" alt="sunset-detail" />
		<img class="mt-40 mb-12 situation" src="sunset_situation.webp" alt="sunset-situation" />
		<div class="flex w-full justify-center items-center mb-3">
			<a class="" href="/tic">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/table-2">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: #f9d413;
	}

	img {
		@apply px-1;
	}

	.situation {
		/* @apply px-12; */
	}
</style>
