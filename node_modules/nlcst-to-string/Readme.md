# nlcst-to-string [![Build Status](https://img.shields.io/travis/wooorm/nlcst-to-string.svg?style=flat)](https://travis-ci.org/wooorm/nlcst-to-string) [![Coverage Status](https://img.shields.io/coveralls/wooorm/nlcst-to-string.svg?style=flat)](https://coveralls.io/r/wooorm/nlcst-to-string?branch=master)

Transform an [NLCST](https://github.com/wooorm/nlcst) node into a string.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install nlcst-to-string
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/nlcst-to-string
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install nlcst-to-string
```

[Duo](http://duojs.org/#getting-started):

```javascript
var nlcstToString = require('wooorm/nlcst-to-string');
```

## Usage

````javascript
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
/*
 * "AT&T"
 */
````

## Related

- [nlcst](https://github.com/wooorm/parse-nlcst)
- [parse-latin](https://github.com/wooorm/parse-latin)
- [parse-dutch](https://github.com/wooorm/parse-dutch)
- [parse-english](https://github.com/wooorm/parse-english)
- [retext](https://github.com/wooorm/retext)
- [textom](https://github.com/wooorm/textom)

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
