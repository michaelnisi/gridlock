var gridlock = require('./')

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
