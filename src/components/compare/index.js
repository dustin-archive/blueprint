module.exports = {
  template: '#compare',
  computed: {
    queue: function () {
      return this.$store.state.compare.queue
    }
  },
  methods: {
    clear: function () {
      this.$store.commit('compare_clear')
    },
    close: function () {
      this.$store.dispatch('modal_close')
    },
    compare: function () {
      this.$store.dispatch('modal_open', 'compare')
    }
  },
  components: {
    check: require('components/check')
  }
}
