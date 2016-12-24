module.exports = {
  computed: {
    modal: function () {
      return this.$store.state.modal.modal
    }
  },
  components: {
    compare: require('../compare/compare.vue'),
    'compare-modal': require('../compare/compare-modal.vue'),
    modal: require('../modal/modal.vue'),
    page: require('../page/page.vue'),
    pagination: require('../pagination/pagination.vue')
  }
}
