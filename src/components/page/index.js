module.exports = {
  template: '#page',
  computed: {
    items: function () {
      return this.$store.getters.page_items
    }
  },
  components: {
    check: require('components/check'),
    compare: require('components/compare')
  }
}
