<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const currentYear = new Date().getFullYear();

	function getAssetUrl(uuid: string): string {
		return 'https://directus.herhoffer.net/assets/' + uuid;
	}

</script>

<section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
	<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
		<video class="min-w-full min-h-full absolute object-cover" autoplay muted loop>
			<source src="{getAssetUrl(data.band.hero_image)}" type="video/mp4" >
		</video>
	</div>
	<div class="video-content space-y-2 w-full">
		<div class="xl:w-8/12 w-10/12 items-center justify-center mx-auto" id="logo">
			<h1>
				<img class="w-full h-full object-cover" alt="Akzedia" src="akzedia.svg" />
			</h1>
			<p class="mb-20 text-2xl tracking-widest uppercase font-thin">Lorem Ipsum</p>
		</div>
	</div>
</section>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="items-center grid-flow-col">
		<p>©&nbsp;{currentYear}</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		{data.band.impress}
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