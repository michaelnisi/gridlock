
var test = require('tap').test
  , gridlock = require('./')
  ;

test('it', function (t) {
  var f = gridlock()
  var str = 'lock'
  t.notok(f.lock(str))
  t.ok(f.lock(str))
  f.once(str, function (str) {
    t.is(str, str)
    t.notok(f.lock(str))
    t.ok(f.lock(str))
    f.unlock(str)
    t.end()
  })
  f.unlock(str)
})
