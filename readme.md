# filled-array [![Build Status](https://travis-ci.org/sindresorhus/filled-array.svg?branch=master)](https://travis-ci.org/sindresorhus/filled-array)

> Returns an array filled with the specified input


## Install

```
$ npm install --save filled-array
```


## Usage

```js
const filledArray = require('filled-array');

filledArray('x', 3);
//=> ['x', 'x', 'x']

filledArray(0, 3);
//=> [0, 0, 0]

filledArray(function (index) {
	// https://gist.github.com/jaysonrowe/1592432#gistcomment-882551
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}, 15);
//=> [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
