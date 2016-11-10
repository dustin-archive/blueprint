module.exports = {
  template: '#pagination',
  computed: {
    number: function () {
      return this.$store.state.page.number
    },
    last: function () {
      var state = this.$store.state.page;
      return state.items.length / state.range
    }
  },
  methods: {
    dim: function (value) {
      return this.number === value && ['-dim']
    },
    hide_next: function (value) {
      return this.number + value > this.last && ['-hide']
    },
    hide_prev: function (value) {
      return this.number - value < 1 && ['-hide']
    },
    next: function (value) {
      this.$store.commit('page_to', this.number + value)
    },
    prev: function (value) {
      this.$store.commit('page_to', this.number - value)
    }
  }
}
