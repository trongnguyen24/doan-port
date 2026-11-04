import { getPlays } from '$lib/data';

export function load() {
	return {
		plays: getPlays()
	};
}
