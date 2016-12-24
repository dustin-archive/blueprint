module.exports = {
  computed: {
    number: function () {
      return this.$store.state.page.number
    },
    last: function () {
      return this.$store.getters.page_last
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
    to: function (value) {
      this.$store.dispatch('page_to', value)
    },
    next: function (value) {
      this.$store.dispatch('page_to', this.number + value)
    },
    prev: function (value) {
      this.$store.dispatch('page_to', this.number - value)
    }
  }
}
