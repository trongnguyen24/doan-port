/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	return {
		pathname: url.pathname
	};
}
