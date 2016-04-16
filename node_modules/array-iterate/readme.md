# array-iterate [![Build Status](https://img.shields.io/travis/wooorm/array-iterate.svg)](https://travis-ci.org/wooorm/array-iterate) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/array-iterate.svg)](https://codecov.io/github/wooorm/array-iterate)

[`Array#forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
with the possibility to change the next position.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install array-iterate
```

**array-iterate** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](array-iterate.js) and [compressed](array-iterate.min.js).

## Usage

```js
var iterate = require('array-iterate');
var isFirst = true;
var context = 'iterate';

iterate([1, 2, 3, 4], function (value, index, values) {
    console.log(this, value, index, values)

    if (isFirst && index + 1 === values.length) {
        isFirst = false;

        return 0;
    }
}, context);
/**
 * [String: 'iterate'], 1, 0, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 2, 1, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 3, 2, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 4, 3, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 1, 0, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 2, 1, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 3, 2, [ 1, 2, 3, 4 ]
 * [String: 'iterate'], 4, 3, [ 1, 2, 3, 4 ]
 */
```

## API

### iterate(values, callback\[, context\])

Functions just like [`Array#forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach),
but when `callback` returns a `number`, iterates over the item at `number` next.

**Parameters**

*   `values` (`Array`-like thing)
    — Values to iterate over

*   `callback` ([`Function`](#function-callbackvalue-index-values))
    — Callback given to `iterate`.

*   `context` (`*`, optional)
    — Context object to use when invoking `callback`.

#### function callback(value, index, values)

Callback given to `iterate`.

**Parameters**

*   `value` (`*`) — Current iteration;
*   `index` (`number`) — Position of `value` in `values`;
*   `values` (`Array`-like thing) — Currently iterated over.

**Context**

`context`, when given to `iterate`.

**Returns**

`number` (optional) — Position to go to next.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
