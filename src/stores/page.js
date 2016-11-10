function generate_array (value) {
  var i = 0, result = []
  while (i < value) { result.push(i); i++ }
  return result
}

module.exports = {
  state: {
    number: 1,
    range: 24,
    items: generate_array(100)
  },
  mutations: {
    page_to: function (state, value) {
      if (value > 0 && value < state.items.length / state.range) state.number = value
    }
  }
}
