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

	let nextPost;
	let currentIndex = posts.findIndex((post) => post.slug === params.slug);

	if (currentIndex === -1 || currentIndex + 1 === posts.length) {
		// Trả về post đầu tiên nếu không tìm thấy slug hoặc là post cuối cùng
		nextPost = posts[0];
	} else {
		// Trả về post kế tiếp
		nextPost = posts[currentIndex + 1];
	}

	return {
		content: post.default,
		meta: post.metadata,
		posts,
		nextPost
	};
}
