export default function filledArray(fillValue, count) {
	if (!(Number.isSafeInteger(count) && count >= 0)) {
		throw new TypeError(`Expected \`count\` to be a non-negative integer, got \`${count}\`.`);
	}

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
