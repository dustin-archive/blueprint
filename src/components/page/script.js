module.exports = {
  computed: {
    items: function () {
      return this.$store.getters.page_items
    }
  },
  components: {
    check: require('../check/main.vue')
  }
}
