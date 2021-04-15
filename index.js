export default function filledArray(fillValue, count) {
	const returnValue = Array.from({length: count});
	const isFunction = typeof fillValue === 'function';

	if (!isFunction) {
		return returnValue.fill(fillValue);
	}

	for (let index = 0; index < count; index++) {
		returnValue[index] = isFunction ? fillValue(index, count, returnValue) : fillValue;
	}

	return returnValue;
}
