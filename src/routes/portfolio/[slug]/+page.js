// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export const prerender = true;
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
