import posts from './posts.json';
import plays from './plays.json';

export function getPosts() {
	return posts;
}

/** @param {string} slug */
export function getPostBySlug(slug) {
	return posts.find((post) => post.slug === slug);
}

/** @param {string} slug */
export function getNextPost(slug) {
	const currentIndex = posts.findIndex((post) => post.slug === slug);

	// Trả về post đầu tiên nếu không tìm thấy slug hoặc là post cuối cùng
	if (currentIndex === -1) {
		return posts[0];
	}

	return posts[(currentIndex + 1) % posts.length];
}

export function getPlays() {
	return plays;
}
