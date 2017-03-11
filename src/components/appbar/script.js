module.exports = {
  methods: {
    login: function () {
      this.$store.dispatch('modal_open', 'login')
    },
    register: function () {
      this.$store.dispatch('modal_open', 'register')
    }
  },
  components: {
    // drop: require('../drop/main.vue'),
    // navigation: require('../navigation/main.vue'),
    // search: require('../search/main.vue')
  }
}
