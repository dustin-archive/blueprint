module.exports = function (queue, value, state) {
  queue = _.clone(queue)

  if (queue.indexOf(value) !== -1) _.remove(queue, function (i) {
    return i === value
  })

  if (state) queue.push(value)

  return queue
}
