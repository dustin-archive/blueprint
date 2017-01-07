module.exports = {
  computed: {
    modal: function () {
      return this.$store.state.modal.modal
    }
  },
  components: {
    compare: require('../compare/main.vue'),
    'compare-modal': require('../compare-modal/main.vue'),
    modal: require('../modal/main.vue'),
    page: require('../page/main.vue'),
    pagination: require('../pagination/main.vue')
  }
}
