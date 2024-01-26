// @ts-nocheck
/** @type {import('./$types').PageLoad} */
import { postsStore } from '$lib/store.js';
export const prerender = false;

export async function load({ params, fetch }) {
	const post = await import(`../../../lib/posts/${params.slug}.svelte`);

	let posts;
	const unsubscribe = postsStore.subscribe((value) => {
		posts = value;
	});
	unsubscribe();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (posts === null) {
		const response = await fetch('/api/posts');
		posts = await response.json();
		postsStore.set(posts); // Cập nhật store
	}

	return {
		content: post.default,
		meta: post.metadata,
		posts
	};
}
