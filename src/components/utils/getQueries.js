export function getQueries(searchStr) {
	const query = searchStr.substring(1);
	const vars = query.split('&');
	const result = {};
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');
		result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return result;
}