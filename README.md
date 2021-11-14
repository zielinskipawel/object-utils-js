# object-utils-js

> A collection of utilities dealing with object.

ES5, tested package
## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i object-utils-js
```

## Usage

with es modules
```js
import { isObject } from 'object-utils-js'
```

### isObject
Use `isObject` if you only want to check if the value is an object and not an array, or Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.

**true** when created by the `Object` constructor.

```js
isObject(Object.create({}))
isObject(Object.create(Object.prototype))
isObject({foo: 'bar'})
isObject({})
```

**false** when not created by the `Object` constructor.

```js
isObject(null)
isObject(1)
isObject(['foo', 'bar'])
isObject([])
isObject(()=>{})
isObject(Object.create(null))
isObject(global.document)
```
### isObjectOrNull
similar to isObject func except null value

**true** for input parameter.
```js
isObjectOrNull(null)
```
### toObject
convert any input to object
```js
toObject(null)
//=> {}
toObject({})
//=> {}
toObject({a:"a"})
//=> {a:"a"}
toObject(["a"])
//=> {}

```
### Author

**Pawel Zielinski**

* [GitHub Profile](https://github.com/zielinskipawel)
* [NPM Profile](https://www.npmjs.com/settings/zielinskipawel)

### License

Copyright © 2021, [Pawel Zielinski(https://github.com/zielinskipawel).
Released under the [MIT License](LICENSE).

***