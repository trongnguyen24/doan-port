import { playsStore } from '$lib/store.js';

export async function load({ fetch }) {
	// Kiểm tra xem store đã có dữ liệu chưa
	let plays;
	const unsubscribe = playsStore.subscribe((value) => {
		plays = value;
	});
	unsubscribe();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (plays === null) {
		const response = await fetch('https://doan.nguyenle.de/api/collections/plays/records');
		plays = await response.json();
		playsStore.set(plays); // Cập nhật store
	}

	return { plays };
}
