module.exports = {
  template: '#page',
  computed: {
    items: function () {
      return this.$store.getters.page_items
    },
    queue: function () {
      return this.$store.state.compare.queue
    }
  },
  methods: {
    clear: function () {
      this.$store.commit('compare_clear')
    }
  },
  components: {
    check: require('components/check')
  }
}
