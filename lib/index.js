/**
 * @param {data} Iterable<number>
 */
function sleepSort(data) {
	const result = [];

	if (data.length === 0) {
		return new Promise((resolve) => resolve(result));
	}

	const promises = data.map(value =>
		new Promise((resolve) => setTimeout(resolve, value * 100, value))
			.then(value => result.push(value))
	);

	return Promise.all(promises).then(() => result);
}

module.exports = sleepSort;