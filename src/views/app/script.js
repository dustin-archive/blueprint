module.exports = {
  computed: {
    modal: function () {
      return this.$store.state.modal.modal
    }
  },
  components: {
    'v-appbar': require('../../components/appbar/main.vue'),

    'v-compare': require('../../components/compare/main.vue'),


    'compare-modal': require('../../components/compare-modal/main.vue'),
    modal: require('../../components/modal/main.vue'),
    page: require('../../components/page/main.vue'),
    pagination: require('../../components/pagination/main.vue')
  }
}
