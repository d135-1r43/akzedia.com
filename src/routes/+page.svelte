<script lang="ts">
	import type { PageData } from './$types';
	import Logo from '$lib/logo.svelte';
	import { MetaTags } from 'svelte-meta-tags';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const currentYear = new Date().getFullYear();

	function getAssetUrl(uuid: string): string {
		return 'https://directus.herhoffer.net/assets/' + uuid;
	}

</script>

<svelte:head>
	<title>{data.band.name}</title>
</svelte:head>

<MetaTags
	title={data.band.name}
	description={data.band.short_description}
	openGraph={{
    url: data.band.website,
    title: data.band.name,
    description: data.band.short_description,
    images: [
      {
        url: getAssetUrl(data.band.hero_image),
        width: data.hero.width,
        height: data.hero.height,
        alt: data.hero.description
      }
    ],
    siteName: data.band.name
  }}
/>

<section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
	<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
		<video class="min-w-full min-h-full absolute object-cover" autoplay muted loop playsinline>
			<source src="{getAssetUrl(data.band.hero_video)}" type="video/mp4">
		</video>
	</div>
	<div class="video-content space-y-2 w-full">
		<div class="xl:w-6/12 w-10/12 items-center justify-center mx-auto" id="logo">
			<h1 class="w-full h-full object-cover">
				<Logo />
			</h1>
			<p class="mb-10 mt-20 text-2xl tracking-widest uppercase font-trajan">{data.band.short_description}</p>
		</div>
		<div class="items-center justify-center mx-auto text-4xl">
			{#each data.band.links as link}
				<a href={link.url} class="text-gray-300 transition hover:text-gray-500 p-2">
					<i class="{link.font_awesome_font} {link.font_awesome_icon_name}"></i>
				</a>
			{/each}
		</div>
	</div>
</section>

<footer class="footer items-center p-4 bg-black text-gray-600">
	<div class="items-center grid-flow-col">
		<p>©&nbsp;{currentYear}&nbsp;&middot;&nbsp;Impress: {data.band.impress.replace(/<[^>]*>?/gm, '')}
		</p>
	</div>
</footer>

<style>
    .video-docker video {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .video-docker::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    .video-content {
        z-index: 2;
    }
</style>