var push_queue = require('./lib/push_queue')

module.exports = {
  state: {
    queue: []
  },
  getters: {
    modal: function (state) {
      var queue = state.queue
      return queue[queue.length - 1]
    }
  },
  mutations: {
    modal_place: function (state, arr) {
      state.queue = push_queue(state.queue, arr[0], arr[1])
    }
  },
  actions: {
    modal_open: function (context, modal) {
      context.commit('modal_place', [modal, true])
    },
    modal_close: function (context) {
      context.commit('modal_place', [context.state.modal, false])
    }
  }
}
