var clone = require('lodash/clone')
var pullAt = require('lodash/pullAt')

module.exports = function queue_toggle (queue, value) {
  queue = clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) pullAt(queue, index)
  else queue.push(value)

  return queue
}

// Array, String -> Array
// module.exports = function queue_toggle (q, v) {
//   var i = q.indexOf(v)
//   return i === -1 ? !! q.unshift(v) : !q.splice(i, 1)
// }
