var Vue = require('vue'),
    Vuex = require('vuex')

Vue.use(Vuex)

new Vue({
  el: '#root',
  store: new Vuex.Store({
    modules: {
      compare: require('./store/compare'),
      modal: require('./store/modal'),
      page: require('./store/page')
    }
  }),
  render: function (h) {
    return h(require('./views/app/main.vue'))
  }
})
