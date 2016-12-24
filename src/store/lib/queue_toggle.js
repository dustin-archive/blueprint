module.exports = function queue_toggle (queue, value) {
  queue = _.clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) _.pullAt(queue, index)
  else queue.push(value)

  return queue
}

// Array, String -> Array
// module.exports = function queue_toggle (q, v) {
//   var i = q.indexOf(v)
//   return i === -1 ? !! q.unshift(v) : !q.splice(i, 1)
// }
