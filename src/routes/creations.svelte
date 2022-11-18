<script>
	// import '../styles/tailwind.css';

	import { seo } from '$lib/store.js';

	$seo = {
		title: 'Creations',
		description: 'Popi Creations Meuble unique Design Furniture'
	};
	let grid = false;
	let gridClick = () => (grid = !grid);
</script>

<div class="relative {grid && 'flex flex-wrap grid-cont'}">
	<button class="hidden absolute right-0" on:click={gridClick}
		><img class="mr-4 mt-1" width="40" height="40" src="/gridicon.png" /></button
	>
	<div id="ninth" class="m-3 sm:mb-0">
		<a href="/tic">
			<img class="md:max-w-prose w-full" src="tic.webp" alt="buffet" />
		</a>
	</div>
	<div id="eighth" class="m-3 sm:mb-0">
		<a href="/sunset">
			<img class="md:max-w-prose" src="tablesunset.webp" alt="buffet" />
		</a>
	</div>
	<div id="first" class="m-3 sm:mb-0">
		<a href="/table-2">
			<img class="md:max-w-prose" src="table-2.webp" alt="table 2" />
		</a>
	</div>
	<div id="sec" class="m-3 sm:mb-0">
		<a href="/table-1">
			<img class="md:max-w-prose" src="table-1.webp" alt="table 1" />
		</a>
	</div>
	<div id="fourth" class="m-3 sm:mb-0">
		<a href="/commode">
			<img class="md:max-w-prose" src="commode.webp" alt="commode" />
		</a>
	</div>
	<div id="third" class="m-3 sm:mb-0">
		<a href="/table-bleu">
			<img class="md:max-w-prose" src="table-bleu.webp" alt="table bleu" />
		</a>
	</div>
	<div id="fifth" class="m-3 sm:mb-0">
		<a href="/banc">
			<img class="md:max-w-prose" src="banc.webp" alt="banc" />
		</a>
	</div>
	<div id="sixth" class="m-3 sm:mb-0">
		<a href="/meuble-entree">
			<img class="md:max-w-prose" src="meuble entree.webp" alt="meuble entree" />
		</a>
	</div>
	<div id="seventh" class="m-3 sm:mb-0">
		<a href="/buffet">
			<img class="md:max-w-prose" src="buffet.webp" alt="buffet" />
		</a>
	</div>
</div>

<style>
	#first {
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		/* background-repeat: no-repeat; */
		background-color: dodgerblue;
	}
	#sec {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		background-repeat: no-repeat;
		background-color: tomato;
	}
	#third {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		background-repeat: no-repeat;
		background-color: yellow;
	}
	#fourth {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-color: lightskyblue;
	}
	#fifth {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		background-repeat: no-repeat;
		background-color: #5cac92;
	}
	#sixth {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		background-repeat: no-repeat;
		background-color: #f9b256;
	}
	#seventh {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		@apply w-full;
		/* background-size: 100% auto; */
		background-repeat: no-repeat;
		background-color: #f82f4e;
	}
	#eighth {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		/* background-size: 100% auto; */
		@apply w-full;
		background-repeat: no-repeat;
		background-color: #f9d413;
	}
	#ninth {
		@apply bg-center;
		@apply flex;
		@apply justify-center;
		background-color: rgb(224, 118, 118);
		@apply w-full;
	}

	.grid-cont div {
		max-width: 200px;
		height: 200px;
	}
</style>
