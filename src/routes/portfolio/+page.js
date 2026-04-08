import { getPosts } from '$lib/posts';

export function load() {
	return {
		posts: getPosts()
	};
}
