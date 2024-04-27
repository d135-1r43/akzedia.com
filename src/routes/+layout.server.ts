// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: fetch }) => {

	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/band/2`
	);

	const bandJson: unknown = await jsonResponse.json();

	// @ts-expect-error Provided by Svelte
	return { band: bandJson.data };
};