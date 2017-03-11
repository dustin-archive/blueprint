module.exports = {
  computed: {
    items: function () {
      return this.$store.getters.page_items
    }
  },
  components: {
    'v-card': require('../card/main.vue')
  }
}
