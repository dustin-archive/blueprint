module.exports = function (queue, value, state) {
  queue = _.clone(queue)

  var index = queue.indexOf(value)

  if (index !== -1) _.pullAt(queue, index)

  if (state) queue.push(value)

  return queue
}

// function queue_toggle(q,v){var i=q.indexOf(v);return i===-1?!!q.unshift(v):!q.splice(i,1)}
// function queue_push(q,v,c){var i=q.indexOf(v);return (i!==-1&&!q.splice(i,1))||(c&&!!q.unshift(v))}
