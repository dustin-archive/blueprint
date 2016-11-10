module.exports = {
  template: '#page',
  computed: {
    items: function () {
      var page = this.$store.state.page, range = page.range, offset = range * (page.number - 1)
      return _.slice(page.items, offset, range + offset)
    },
    queue: function () {
      return this.$store.state.compare.queue
    }
  },
  components: {
    check: require('components/check')
  }
}
