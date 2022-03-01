<script>
	import { seo } from '$lib/store.js';
	import GltfModel from '$lib/GltfModel/src/main.svelte';

	$seo = {
		title: 'Banc',
		description: 'Banc Sapin Bleu Meuble Popi design Atelier'
	};
</script>

<div class="flex flex-col ">
	<div class="m-auto max-w-prose flex flex-col items-center p-3">
		<h1 class="text-3xl uppercase text-center mb-3">Banc CHAUSSETTE DE SPORT</h1>
		<p>Sapin 32 x 78,5 x 16,5</p>
		<p class="text-gray-500">100€</p>
		<img class="mb-52 mt-28" style="" src="banc-face.png" alt="banc face" />
		<img class="mb-52" src="banc-haut.png" alt="banc haut" />
		<img class="mb-40" width="400" src="banc-detail.png" alt="banc detail" />
		<img class="mb-32 mt-32 px-12" src="banc-situation.webp" alt="banc situation" />
		<img class="mb-12 px-12" src="banc-situation2.webp" alt="banc situation 2" />
		<!-- <div class="w-full" style="height:500px">
			<GltfModel />
		</div> -->

		<div class="flex w-full justify-center items-center  ">
			<a class="/table-2" href="/table-bleu">
				<img height="40" width="40" src="arrow-left.webp" alt="arrow left" />
			</a>
			<a class="ml-auto" href="/meuble-entree">
				<img height="40" width="40" src="arrow-right.webp" alt="arrow right" />
			</a>
		</div>
	</div>
</div>

<style>
	h1 {
		color: #5cac92;
	}
</style>
