/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
export async function load(url) {
	try {
		const post = await import(`../../../posts/${url.params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${url.params.slug}`);
	}
}
