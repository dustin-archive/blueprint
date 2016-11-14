module.exports = function (queue, value, state) {
  queue = _.clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) _.pullAt(queue, index)

  if (state) queue.push(value)

  return queue
}
