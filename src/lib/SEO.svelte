<script>
	import { seo } from '$lib/store.js';
</script>

<svelte:head>
	<title>{$seo.title}</title>
	<meta charset="utf-8" />
	<meta name="description" content={$seo.description} />
	<meta name="”robots”" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
