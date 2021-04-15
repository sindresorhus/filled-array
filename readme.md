# filled-array

> Returns an array filled with the specified input

## Install

```
$ npm install filled-array
```

## Usage

```js
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

## API

### filledArray(fillValue, count)

#### fillValue

Type: `unknown`

Value to fill the array with.

You can pass a function to generate the array items dynamically. The function is expected to return the value for each iteration and will be called with the following arguments: index, the count you passed in, and the filled array thus far.

#### count

Type: `number`

Number of items to fill the array with.
