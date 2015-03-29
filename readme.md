# is-gzip [![Build Status](http://img.shields.io/travis/kevva/is-gzip/master.svg?style=flat)](https://travis-ci.org/kevva/is-gzip)

> Check if a Buffer/Uint8Array is a GZIP file


## Install

```
$ npm install --save is-gzip
```


## Usage

```js
var isGzip = require('is-gzip');
var read = require('fs').readFileSync;

isGzip(read('foo.tar.gz'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
