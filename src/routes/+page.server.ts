// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: fetch }) => {

	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/band/2?fields=*,links.*`
	);

	const bandJson: unknown = await jsonResponse.json();
	// @ts-ignore
	const heroImageUuid: string = bandJson.data.hero_image;

	const heroImageFileResponse: Response = await fetch(
		`https://directus.herhoffer.net/files/` + heroImageUuid
	);
	const fileJson: any = await heroImageFileResponse.json();

	// @ts-expect-error Provided by Svelte
	return { band: bandJson.data, hero: fileJson.data };
};