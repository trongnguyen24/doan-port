import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

// Hàm lấy danh sách bài viết
async function getPosts() {
	let posts = [];

	// Sử dụng import.meta.glob để lấy các file bài viết
	const paths = import.meta.glob('/src/posts/*.svelte', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svelte', '');

		// Trích xuất metadata từ file
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	// Sắp xếp các bài viết theo ngày đăng
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

// Xử lý GET request
export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
