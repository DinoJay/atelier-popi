<script>
	import { portal } from './portalAction';
	import { fade, slide, fly, blur } from 'svelte/transition';
	export let srcs;
	export let start;
	export let style;
	export let className;
	export let alt;
	let open = false;

	let counter = start;

	$: {
		counter = start;
	}

	const close = () => {
		open = false;
		counter = start;
	};
	$: goRight = (e) => {
		e.stopPropagation();
		counter = (counter + 1) % srcs.length;
	};
	$: goLeft = (e) => {
		e.stopPropagation();
		const c = counter - 1 < 0 ? srcs.length - 1 : counter - 1;
		counter = c % srcs.length;
	};

	const prev = counter - 1 > 0 ? srcs[counter - 1][0] : null;
	const current = srcs[counter][0];
	const next = counter + 1 < srcs.length ? srcs[counter + 1][0] : null;
</script>

<img src={srcs[start][0]} {alt} class={className} {style} on:click={() => (open = true)} />

{#if open}
	<div
		transition:blur
		use:portal={'modals'}
		class="fixed modal cont w-full h-full flex "
		on:click={close}
	>
		<div class="m-auto">
			{#key srcs[counter][0]}
				<img
					src={srcs[counter][0]}
					width={600}
					height={600}
					alt={srcs[counter][1]}
					style="max-height:700px"
				/>
			{/key}
			<div class="flex items-center justify-center mt-3">
				<button class="mr-1 z-10" on:click={goLeft}>
					<img height="40" width="40" src="/arrow-left.webp" alt="arrow left" />
				</button>
				<button class="ml-12 z-10" on:click={goRight}>
					<img height="40" width="40" src="/arrow-right.webp" alt="arrow right" />
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		left: 50%;
		top: 50%;

		transform: translate(-50%, -50%);
	}
	.cont {
		background: rgba(240, 248, 255, 0.86);
	}
</style>
