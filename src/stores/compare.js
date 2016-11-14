var toggle_queue = require('./lib/toggle_queue')

module.exports = {
  state: {
    queue: []
  },
  mutations: {
    compare_place: function (state, id) {
      state.queue = toggle_queue(state.queue, id)
    },
    compare_clear: function (state) {
      state.queue = []
    }
  }
}
