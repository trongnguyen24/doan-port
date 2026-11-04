// Export dữ liệu từ PocketBase ra file tĩnh (JSON + ảnh trong static/).
// Chạy: node scripts/export-pocketbase.mjs
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://doan.nguyenle.de';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const STATIC = path.join(ROOT, 'static');
const DATA = path.join(ROOT, 'src/lib/data');

const safe = (s) => s.replace(/[^a-z0-9-_]+/gi, '-').replace(/-+/g, '-');

async function getRecords(collection) {
	const res = await fetch(
		`${BASE}/api/collections/${collection}/records?perPage=200&sort=-order&filter=(published=true)`
	);
	if (!res.ok) throw new Error(`${collection}: HTTP ${res.status}`);
	return (await res.json()).items;
}

async function download(url, dest) {
	try {
		await access(dest);
		return; // đã có
	} catch {}
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
	await mkdir(path.dirname(dest), { recursive: true });
	await writeFile(dest, Buffer.from(await res.arrayBuffer()));
}

const fileURL = (record, file) => `${BASE}/api/files/${record.collectionId}/${record.id}/${file}`;

async function exportPosts() {
	const records = await getRecords('posts');
	const posts = [];

	for (const record of records) {
		const dir = `posts/${safe(record.slug)}`;
		await download(fileURL(record, record.image), path.join(STATIC, dir, record.image));

		const imgPattern = /https:\/\/doan\.nguyenle\.de\/(?:_\/\.\.\/)?api\/files\/[^/]+\/[^/]+\/([^"?]+)(?:\?[^"]*)?/g;
		const urls = [...record.content.matchAll(imgPattern)];
		for (const [url, file] of urls) {
			await download(url.split('?')[0], path.join(STATIC, dir, file));
		}
		const content = record.content.replace(imgPattern, (_, file) => `/${dir}/${file}`);

		posts.push({
			title: record.title,
			slug: record.slug,
			description: record.description,
			image: `/${dir}/${record.image}`,
			content,
			order: record.order
		});
		console.log(`post: ${record.slug} (${urls.length} ảnh)`);
	}

	await writeFile(path.join(DATA, 'posts.json'), JSON.stringify(posts, null, '\t') + '\n');
}

async function exportPlays() {
	const records = await getRecords('plays');
	const plays = [];

	for (const record of records) {
		for (const file of [record.image, record.thumb]) {
			await download(fileURL(record, file), path.join(STATIC, 'plays', file));
		}
		plays.push({
			name: record.name,
			image: `/plays/${record.image}`,
			thumb: `/plays/${record.thumb}`,
			order: record.order
		});
	}
	console.log(`plays: ${plays.length}`);

	await writeFile(path.join(DATA, 'plays.json'), JSON.stringify(plays, null, '\t') + '\n');
}

await mkdir(DATA, { recursive: true });
await exportPosts();
await exportPlays();
