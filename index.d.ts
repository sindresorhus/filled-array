/**
Returns an array filled with the specified input.

@param value - The value to fill the array with.
@param count - The number of items to fill the array with.

@example
```
import filledArray from 'filled-array';

filledArray('x', 3);
//=> ['x', 'x', 'x']

filledArray(0, 3);
//=> [0, 0, 0]

filledArray(index => {
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}, 15);
//=> [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
```
*/
export default function filledArray<T>(
	value: T | ((index: number, count: number, currentArray: T[]) => T),
	count: number
): T[];
