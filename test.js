import test from 'ava';
import fn from './';

test(t => {
	t.same(fn('a', 0), []);
	t.same(fn('a', 1), ['a']);
	t.same(fn('a', 2), ['a', 'a']);
	t.same(fn('a', 5), ['a', 'a', 'a', 'a', 'a']);
	t.same(fn('foo', 2), ['foo', 'foo']);
	t.same(fn(0, 2), [0, 0]);
	t.end();
});
