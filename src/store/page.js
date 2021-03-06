var slice = require('lodash/slice')

function generate_array (value) {
  for (var i = 0, result = []; i < value; result[i++] = i);
  return result
}

var generated = generate_array(100)

module.exports = {
  state: {
    // cache: [],
    // data: [],
    number: 1,
    range: 12,
    items: generated,
  },
  getters: {
    page_items: function (state) {
      var range = state.range, offset = range * (state.number - 1)
      return slice(state.items, offset, range + offset)
    },
    page_last: function (state) {
      return ~~(state.items.length / state.range) + 1 // Math.ceil
    }
  },
  mutations: {
    _page_to: function (state, payload) {
      var last = payload[0], value = payload[1]
      state.number = value < 1 ? 1 : value > last ? last: value
    }
  },
  actions: {
    page_to: function (context, payload) {
      context.commit('_page_to', [context.getters.page_last, payload])
    }
  }
}
