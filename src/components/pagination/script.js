function bounds (value, min, max) {
  return (value >= min && value <= max) ? value : null
}

function disable (value, min, max, number) {
  return !bounds(value, min, max) || number === value
}

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
    show: function (value) {
      return bounds(value, 1, this.last)
    },
    disable: function (value) {
      return disable(value, 1, this.last, this.number) && ['-disable']
    },
    // show: function (value) {
    //   return (value >= 1 && value <= this.last) ? value : null
    // },
    // disable: function (value) {
    //   return (!this.show(value) || this.number === value) && ['-disable']
    // },
    to: function (value) {
      this.$store.dispatch('page_to', value)
    }
  },
  components: {
    'v-button': require('../button/main.vue')
  }
}
