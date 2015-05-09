// gridlock - lock one thing

module.exports = exports = Gridlock

var events = require('events')
var util = require('util')

util.inherits(Gridlock, events.EventEmitter)
function Gridlock () {
  if (!(this instanceof Gridlock)) return new Gridlock()
  events.EventEmitter.call(this)
  this.locks = Object.create(null)
}

Gridlock.prototype.lock = function (id) {
  return this.locks[id] || !(this.locks[id] = true)
}

Gridlock.prototype.unlock = function (id) {
  delete this.locks[id]
  this.emit(id, id)
}
