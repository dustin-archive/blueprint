var queue_push = require('./lib/queue_push')

module.exports = {
  state: {
    queue: [],
    modal: null
  },
  mutations: {
    modal_update: function (state, arr) {
      var queue = state.queue
      state.queue = queue_push(queue, arr[0], arr[1])
      state.modal = queue[queue.length - 1]
    }
  },
  actions: {
    modal_open: function (context, modal) {
      context.commit('modal_update', [modal, true])
    },
    modal_close: function (context) {
      context.commit('modal_update', [context.state.modal, false])
    }
  }
}
