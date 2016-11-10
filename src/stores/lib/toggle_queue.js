module.exports = function (queue, value) {
  queue = _.clone(queue)

  if (queue.indexOf(value) !== -1) _.remove(queue, function (i) {
    return i === value
  })
  else queue.push(value)

  return queue
}
