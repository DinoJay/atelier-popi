<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
	export const load = async ({ url }) => {
		return {
			props: {
				key: url.pathname
				// page: page
			}
		};
	};
</script>

<script>
	import { fade, fly, slide } from 'svelte/transition';
	import SEO from '$lib/SEO.svelte';

	import { onMount } from 'svelte';
	import '../styles/tailwind.css';
	import MenuIcon from 'svelte-remixicon/lib/icons/MenuLine.svelte';
	import PageTransition from '$lib/pageTrans.svelte';

	export let key;
	export let page;

	let open = false;
	const routePaths = {
		'/banc': 0,
		'/buffet': 1,
		'/collab': 2,
		'/commode': 3,
		'/contact': 0,
		'/creations': 1,
		'/meuble-entree': 2,
		'/': 3,
		'/table-1': 0,
		'/table-2': 1,
		'/table-bleu': 2
	};
	$: cleanedPath = key.substring(0);
	console.log('cleanedPath', key, cleanedPath);

	const imgPaths = ['popibleu.webp', 'popijaune.webp', 'popivert.webp', 'popirouge.webp'];

	$: i = routePaths[key];
	const autoclose = () => (open = false);
	let menuFixed = false;
	onMount(() => {
		window.onscroll = function () {
			if (document.body.scrollTop > 103 || document.documentElement.scrollTop > 103) {
				menuFixed = true;
				// document.getElementById('myP').className = 'test';
			} else {
				menuFixed = false;
				// document.getElementById('myP').className = '';
			}
		};
	});
</script>

<SEO />
<div class="max-w-screen-xl m-auto relative">
	<div class="flex  fixed w">
		<nav class="w bg-white  p-6 relative">
			<button
				aria-label="nav"
				on:click={() => (open = !open)}
				class="flex items-center px-3 py-2 absolute right-0"
			>
				<MenuIcon
					class="transition-all"
					style="transform: rotate({open ? '90' : 0}deg)"
					size="40px"
				/>
			</button>
			<div class="flex items-center  mr-6 ">
				<a href="/">
					<img style="height: 50px" src={imgPaths[i]} height="20" alt="logo" />
				</a>
			</div>
			{#if open}
				<div transition:slide={{ duration: 500 }} class="">
					<div class="text-lg">
						<a
							on:click={autoclose}
							href="/"
							class="block mt-4  text-teal-lighter {key === '/' && 'underline'}"
						>
							Accueil
						</a>
						<a
							on:click={autoclose}
							href="creations"
							class="block mt-4  text-teal-lighter {key === '/creations' && 'underline'}"
						>
							Creations
						</a>
						<a
							on:click={autoclose}
							href="collab"
							class="block mt-4  text-teal-lighter {key === '/collab' && 'underline'}"
						>
							Collab
						</a>
						<a
							on:click={autoclose}
							href="contact"
							class="block mt-4  text-teal-lighter {key === '/contact' && 'underline'} "
						>
							Contact
						</a>
					</div>
				</div>
			{/if}
		</nav>
	</div>
	<main class="sm:px-3 " style="padding-top:104px">
		<PageTransition refresh={key}>
			<slot />
		</PageTransition>
	</main>
</div>

<style>
	.w {
		width: 100%;
		min-width: inherit;
		max-width: inherit;
	}
</style>
