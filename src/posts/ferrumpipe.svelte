<script context="module">
	export const metadata = {
		title: 'Tiêu đề bài viết 1',
		description: 'Mô tả ngắn về nội dung bài viết.',
		date: '2024-01-21',
		published: true
	};
</script>

<script>
</script>

<article>
	<h1>{metadata.title}</h1>
	<p>Ngày đăng: {metadata.date}</p>
	<enhanced:img src="./oil-bottle.png" alt="An alt text" />
	<div>
		<p>Nội dung của bài viết ở đây. Đây là một ví dụ về cách bạn có thể cấu trúc một bài viết.</p>
		<p>Bạn có thể thêm nhiều đoạn, ảnh, và các thành phần khác theo nhu cầu.</p>
	</div>
</article>
