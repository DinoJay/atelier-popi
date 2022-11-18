<script>
	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Mini-Series',
		description:
			'Artiste Popi Creations Meuble unique Design Furniture mini-series multidisciplinaire'
	};
</script>

<div class="md:p-12">
	<div class="p-3  max-w-xl ">
		<h1 class="text-3xl mb-3">Mini-séries...</h1>

		<p class="text-justify">
			Ici sont proposés des meubles ou objets produits avec l’intervention d’une machine numérique à
			un moment du processus de réalisation.
		</p>
	</div>

	<div class="">
		<div class="md:flex ">
			<div class="md:pr-24 ">
				<a class="md:max-width-half " href="/mini_series/rouget">
					<img src="rougetcouv.webp" alt="rouget" />
				</a>
			</div>
			<a href="/mini_series/sardine" class="md:max-width-half">
				<img src="sardinecouv.webp" alt="sardine" />
			</a>
		</div>
		<div class="md:flex">
			<div class="md:pr-24 ">
				<a class="md:max-width-half " href="/mini_series/plateau">
					<img src="plateau.png" alt="plateau" />
				</a>
			</div>
			<a href="/mini_series/table" class="md:max-width-half">
				<img src="table.png" alt="table" />
			</a>
		</div>
	</div>
</div>
