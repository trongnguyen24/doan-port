// @ts-nocheck
/** @type {import('./$types').PageLoad} */
import { postsStore } from '$lib/store.js';
export const prerender = false;

export async function load({ params, fetch }) {
	let posts;
	const unsubscribe = postsStore.subscribe((value) => {
		posts = value;
	});
	unsubscribe();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (posts === null) {
		const response = await fetch('https://doan.nguyenle.de/api/collections/posts/records');
		posts = await response.json();
		postsStore.set(posts); // Cập nhật store
	}

	const post = posts.items.find((item) => item.slug === params.slug);

	let nextPost;
	let currentIndex = posts.items.findIndex((post) => post.slug === params.slug);

	if (currentIndex === -1 || currentIndex + 1 === posts.items.length) {
		// Trả về post đầu tiên nếu không tìm thấy slug hoặc là post cuối cùng
		nextPost = posts.items[0];
	} else {
		// Trả về post kế tiếp
		nextPost = posts.items[currentIndex + 1];
	}

	return {
		post,
		posts,
		nextPost
	};
}
