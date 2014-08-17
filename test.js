
var test = require('tap').test
  , gridlock = require('./')
  ;

test('it', function (t) {
  var f = gridlock()
  var id = 'lock'
  t.notok(f.lock(id), 'should not be locked')
  t.ok(f.lock(id), 'should be locked')
  f.once(id, function (id) {
    t.is(id, id)
    t.notok(f.lock(id), 'should not be locked')
    t.ok(f.lock(id), 'should be locked')
    f.unlock(id)
    t.end()
  })
  f.unlock(id)
})
