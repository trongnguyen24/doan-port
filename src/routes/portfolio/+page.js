export async function load({ fetch }) {
	const response = await fetch('api/sveltes');
	const posts = await response.json();
	return { posts };
}
