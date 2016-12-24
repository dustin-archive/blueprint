var queue_push = require('./lib/queue_push')

module.exports = {
  state: {
    queue: [],
    modal: null
  },
  mutations: {
    modal_update: function (state, queue) {
      state.queue = queue
      state.modal = queue[queue.length - 1]
    }
  },
  actions: {
    modal_open: function (context, modal) {
      context.commit('modal_update', queue_push(context.state.queue, modal, true))
    },
    modal_close: function (context) {
      var state = context.state
      context.commit('modal_update', queue_push(state.queue, state.modal, false))
    }
  }
}
