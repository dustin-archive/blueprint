var queue_toggle = require('./lib/queue_toggle')

module.exports = {
  state: {
    queue: []
  },
  mutations: {
    compare_place: function (state, id) {
      state.queue = queue_toggle(state.queue, id)
    },
    compare_clear: function (state) {
      state.queue = []
    }
  }
}
