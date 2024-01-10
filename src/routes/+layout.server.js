/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	return {
		url: url.pathname
	};
}
