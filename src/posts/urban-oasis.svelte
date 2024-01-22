<script context="module">
	import Ferrumpipe from './eco-friendly-workspace.svelte';

	export const metadata = {
		title: 'Urban Oasis',
		description: 'A modern urban garden design blending natural elements with city living.',
		date: '2023-05-15',
		image: 'urban',
		published: true
	};
</script>

<script>
</script>

<article>
	<h1>{metadata.title}</h1>
	<p>Ngày đăng: {metadata.date}</p>
	<div>
		<p>Nội dung của bài viết ở đây. Đây là một ví dụ về cách bạn có thể cấu trúc một bài viết.</p>
		<p>Bạn có thể thêm nhiều đoạn, ảnh, và các thành phần khác theo nhu cầu.</p>
	</div>
</article>
