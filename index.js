
module.exports = exports = Gridlock

var assert = require('assert')
  , events = require('events')
  , util = require('util')
  ;

util.inherits(Gridlock, events.EventEmitter)
function Gridlock () {
  if (!(this instanceof Gridlock)) return new Gridlock()
  events.EventEmitter.call(this)
  this.maxListeners = Infinity
}

Gridlock.prototype.lock = function (str) {
  return this[str] || !(this[str] = true)
}

Gridlock.prototype.unlock = function (str) {
  delete this[str]
  this.emit(str, str)
}
