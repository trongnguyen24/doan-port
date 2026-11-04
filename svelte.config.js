import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	kit: {
		// Toàn bộ trang được prerender thành file tĩnh để deploy lên Cloudflare Pages
		adapter: adapter({
			fallback: '404.html'
		}),
		// Origin dùng khi prerender, để các thẻ Open Graph có URL tuyệt đối đúng
		prerender: {
			origin: 'https://doannguyen.pages.dev'
		}
	},
	preprocess: [vitePreprocess()]
};

export default config;
