var clone = require('lodash/clone')
var pullAt = require('lodash/pullAt')

module.exports = function (queue, value, state) {
  queue = clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) pullAt(queue, index)

  if (state) queue.push(value)

  return queue
}

// function queue_toggle(q,v){var i=q.indexOf(v);return i===-1?!!q.unshift(v):!q.splice(i,1)}
// function queue_push(q,v,c){var i=q.indexOf(v);return (i!==-1&&!q.splice(i,1))||(c&&!!q.unshift(v))}
