import { postsStore } from '$lib/store.js';

export async function load({ fetch }) {
	// Kiểm tra xem store đã có dữ liệu chưa
	let posts;
	const unsubscribe = postsStore.subscribe((value) => {
		posts = value;
	});
	unsubscribe();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (posts === null) {
		const response = await fetch(
			'https://doan.nguyenle.de/api/collections/posts/records?sort=-order&filter=(published=true)'
		);
		posts = await response.json();
		postsStore.set(posts); // Cập nhật store
	}

	return { posts };
}
