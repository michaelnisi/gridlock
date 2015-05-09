
# gridlock - lock one thing

The **gridlock** [Node.js](http://nodejs.org/) module provides a simple locking mechanism for single things.

[![Build Status](https://secure.travis-ci.org/michaelnisi/gridlock.svg)](http://travis-ci.org/michaelnisi/gridlock)

## Usage

```js
var gridlock = require('gridlock')

function op (cb) {
  setTimeout(cb, 1000)
}
var locker = gridlock()
var id = 'abc'
locker.lock(id)
op(function () {
  locker.unlock(id)
})
if (locker.lock(id)) {
  locker.once(id, function () {
    console.log('done')
  })
}
```

## types

### gridlock()

Returns a new `locker` which is an instance of [`EventEmitter`](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### locker.lock(id)

Tries to store the provided identifier. Returns `false` if it succeeds and `true` if it fails meaning the `id` has already been stored (locked).

- `id` `String()` is the identifier of a thing

### locker.unlock(id)

Releases the provided identifier and emits it.

- `id` `String()` is the identifier of a thing

## exports

To access the `Gridlock` class `require('gridlock')`.

## Installation

With [npm](https://npmjs.org/package/gridlock) do:

```
$ npm install gridlock
```

## License

[MIT License](https://github.com/michaelnisi/gridlock/blob/master/LICENSE)
