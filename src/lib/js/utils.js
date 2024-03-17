export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};
export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://doan.nguyenle.de/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};