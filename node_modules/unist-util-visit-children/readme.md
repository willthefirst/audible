# unist-util-visit-children [![Build Status](https://img.shields.io/travis/wooorm/unist-util-visit-children.svg)](https://travis-ci.org/wooorm/unist-util-visit-children) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/unist-util-visit-children.svg)](https://codecov.io/github/wooorm/unist-util-visit-children)

[Unist](https://github.com/wooorm/unist) ([mdast](https://github.com/wooorm/mdast/blob/master/doc/mdastnode.7.md),
[retext](https://github.com/wooorm/retext)) utility to visit direct children of
a parent. As in, wrap `fn` so it accepts a parent and invoke `fn` for each of
its children.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install unist-util-visit-children
```

**unist-util-visit-children** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](unist-util-visit-children.js) and [compressed](unist-util-visit-children.min.js).

## Usage

```js
var visitChildren = require('unist-util-visit-children');
var visitor = visitChildren(console.log.bind(console));

var parent = {
    'type': 'foo',
    'children': [
        { 'type': 'bar', 'value': 'alpha' },
        { 'type': 'bar', 'value': 'bravo' },
        { 'type': 'bar', 'value': 'charlie' }
    ]
};

visitor(parent);
/*
 * { 'type': 'bar', 'value': 'alpha' }
 * { 'type': 'bar', 'value': 'bravo' }
 * { 'type': 'bar', 'value': 'charlie' }
 */
```

## API

### visitChildren(fn)

**Parameters**

*   `fn` ([`Function`](#function-fnchild-index-parent))
    — Function to wrap.

**Return**

[`Function`](#function-visitorparent) — Wrapped `fn`.

#### function fn(child, index, parent)

Visitor for children of `parent`.

**Parameters**

*   `child` ([`Node`](https://github.com/wooorm/unist##unist-nodes))
    — Current iteration;

*   `index` (`number`) — Position of `child` in `parent`;

*   `parent` ([`Node`](https://github.com/wooorm/unist##unist-nodes))
    — Parent node of `child`.

#### function visitor(parent)

Function invoking `fn` for each child of `parent`.

**Parameters**

*   `parent` ([`Node`](https://github.com/wooorm/unist##unist-nodes))
    — Node with children.

**Throws**

*   `Error` — When not given a parent node.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
