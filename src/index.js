new Vue({
  el: '#app',
  store: new Vuex.Store({
    modules: {
      compare: require('stores/compare'),
      modal: require('stores/modal'),
      page: require('stores/page')
    }
  }),
  computed: {
    modal: function () {
      return this.$store.state.modal.modal
    }
  },
  components: {
    compare: require('components/compare'),
    modal: require('components/modal'),
    page: require('components/page'),
    pagination: require('components/pagination')
  }
})
