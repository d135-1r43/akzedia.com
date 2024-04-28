<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;

	function getAssetUrl(uuid: string): string {
		return 'https://directus.herhoffer.net/assets/' + uuid;
	}
</script>

<svelte:head>
	<link rel="icon" href="{getAssetUrl(data.band.favicon)}" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<slot />