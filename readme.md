# is-gzip [![Build Status](https://travis-ci.org/kevva/is-gzip.svg?branch=master)](https://travis-ci.org/kevva/is-gzip)

> Check if a Buffer/Uint8Array is a GZIP file


## Install

```
$ npm install is-gzip
```


## Usage

```js
const fs = require('fs');
const isGzip = require('is-gzip');

isGzip(fs.readFileSync('foo.tar.gz'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
