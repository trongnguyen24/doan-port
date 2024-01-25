// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export const prerender = false;

export async function load({ params, fetch }) {
	const post = await import(`../../../lib/posts/${params.slug}.svelte`);

	const resposts = await fetch('/api/posts');
	const posts = await resposts.json();

	return {
		content: post.default,
		meta: post.metadata,
		posts
	};
}
