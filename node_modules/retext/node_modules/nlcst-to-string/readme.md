# nlcst-to-string [![Build Status](https://img.shields.io/travis/wooorm/nlcst-to-string.svg)](https://travis-ci.org/wooorm/nlcst-to-string) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/nlcst-to-string.svg)](https://codecov.io/github/wooorm/nlcst-to-string)

Transform an [NLCST](https://github.com/wooorm/nlcst) node into a string.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install nlcst-to-string
```

**nlcst-to-string** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](nlcst-to-string.js) and [compressed](nlcst-to-string.min.js).

## Usage

```javascript
var nlcstToString = require('nlcst-to-string');

console.log(nlcstToString({
    "type": "WordNode",
    "data": {
        "partOfSpeech": [
            "NNP",
            "NN"
        ]
    },
    "children": [
        {
            "type": "TextNode",
            "value": "AT"
        },
        {
            "type": "PunctuationNode",
            "value": "&"
        },
        {
            "type": "TextNode",
            "value": "T"
        }
    ]
}));
```

Yields:

```text
AT&T
```

## API

### toString(node\[, separator\])

Stringify an [NLCST](https://github.com/wooorm/nlcst) [node](https://github.com/wooorm/nlcst#node)
(or an array of NLCST nodes).

**Signatures**

*   `toString(node[, separator])`;
*   `toString(nodes[, separator])`.

**Parameters**

*   `node` ([`NLCSTNode`](https://github.com/wooorm/nlcst#node))
    — Node to to stringify.

*   `nodes` (`Array.<NLCSTNode>`) — Nodes to to stringify.

*   `separator` (`string`, optional, default: `''`) — Value to separate
    each item with.

**Returns**

`string` — Stringified `node` / `nodes`.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
