// @ts-nocheck
import eco from '$lib/posts/eco.png?enhanced&format=webp&quality=70&w=560;1024';
import futuristic from '$lib/posts/futuristic.png?enhanced&format=webp&quality=70&w=560;1024';
import minimalist from '$lib/posts/minimalist.png?enhanced&format=webp&quality=70&w=560;1024';
import retro from '$lib/posts/retro.png?enhanced&format=webp&quality=70&w=560;1024';
import urban from '$lib/posts/urban.png?enhanced&format=webp&quality=70&w=560;1024';

import type { Post } from '$lib/types';

type PostModule = {
	default: unknown;
	metadata?: Omit<Post, 'slug'>;
};

const previewImages = {
	eco,
	futuristic,
	minimalist,
	retro,
	urban
} as const;

const postModules = import.meta.glob('$lib/posts/*.svelte', {
	eager: true
}) as Record<string, PostModule>;

const normalizedPosts = Object.entries(postModules)
	.map(([path, module]) => {
		const slug = path.split('/').at(-1)?.replace('.svelte', '');

		if (!slug || !module.metadata?.published) {
			return null;
		}

		return {
			...module.metadata,
			slug
		} satisfies Post;
	})
	.filter((post): post is Post => post !== null)
	.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

export function getPosts() {
	return normalizedPosts;
}

export function getPostBySlug(slug: string) {
	return normalizedPosts.find((post) => post.slug === slug);
}

export function getNextPost(slug: string) {
	const currentIndex = normalizedPosts.findIndex((post) => post.slug === slug);

	if (currentIndex === -1) {
		return normalizedPosts[0];
	}

	return normalizedPosts[(currentIndex + 1) % normalizedPosts.length];
}

export function getPostComponent(slug: string) {
	const path = Object.keys(postModules).find((entry) => entry.endsWith(`/${slug}.svelte`));
	return path ? postModules[path].default : null;
}

export { previewImages };
