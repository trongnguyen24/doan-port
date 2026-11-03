import { getPosts } from '$lib/data';

export function load() {
	return {
		posts: getPosts()
	};
}
