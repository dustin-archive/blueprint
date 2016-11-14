module.exports = function (queue, value) {
  queue = _.clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) _.pullAt(queue, index)
  else queue.push(value)

  return queue
}
