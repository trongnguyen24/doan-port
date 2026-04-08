import { error } from '@sveltejs/kit';
import { getNextPost, getPostBySlug } from '$lib/posts';

export function load({ params }) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post,
		nextPost: getNextPost(params.slug)
	};
}
