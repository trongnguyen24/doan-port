import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	kit: {
		// Toàn bộ trang được prerender thành file tĩnh để deploy lên Cloudflare Pages
		adapter: adapter({
			fallback: '404.html'
		})
	},
	preprocess: [vitePreprocess()]
};

export default config;
