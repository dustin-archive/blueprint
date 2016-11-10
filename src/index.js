new Vue({
  el: '#app',
  store: new Vuex.Store({
    modules: {
      compare: require('stores/compare'),
      page: require('stores/page')
    }
  }),
  components: {
    page: require('components/page'),
    pagination: require('components/pagination')
  }
})
