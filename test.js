import test from 'ava';
import filledArray from './index.js';

function indexPlus(index) {
	return index + 1;
}

function fizzBuzz(index) {
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}

function comprehensive(index, length, partial) {
	return partial.includes(index) ? length : index + 1;
}

test('main', t => {
	t.deepEqual(filledArray('a', 0), []);
	t.deepEqual(filledArray('a', 1), ['a']);
	t.deepEqual(filledArray('a', 2), ['a', 'a']);
	t.deepEqual(filledArray('a', 5), ['a', 'a', 'a', 'a', 'a']);
	t.deepEqual(filledArray('foo', 2), ['foo', 'foo']);
	t.deepEqual(filledArray(0, 2), [0, 0]);
	t.deepEqual(filledArray(indexPlus, 5), [1, 2, 3, 4, 5]);
	t.deepEqual(
		filledArray(fizzBuzz, 15),
		[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
	);
	t.deepEqual(filledArray(comprehensive, 5), [1, 5, 3, 5, 5]);
});
