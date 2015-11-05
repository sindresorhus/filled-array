import test from 'ava';
import fn from './';

function fizzBuzz(index) {
	// https://gist.github.com/jaysonrowe/1592432#gistcomment-882551
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}

function indexPlus(index) {
	return index + 1;
}

function comprehensive(index, length, partial) {
	return partial.indexOf(index) >= 0 ? length : index + 1;
}

test(t => {
	t.same(fn('a', 0), []);
	t.same(fn('a', 1), ['a']);
	t.same(fn('a', 2), ['a', 'a']);
	t.same(fn('a', 5), ['a', 'a', 'a', 'a', 'a']);
	t.same(fn('foo', 2), ['foo', 'foo']);
	t.same(fn(0, 2), [0, 0]);
	t.same(fn(indexPlus, 5), [1, 2, 3, 4, 5]);
	t.same(fn(fizzBuzz, 15), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	t.same(fn(comprehensive, 5), [1, 5, 3, 5, 5]);
	t.end();
});
