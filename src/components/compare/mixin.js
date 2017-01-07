module.exports = {
  computed: {
    queue: function () {
      return this.$store.state.compare.queue
    }
  },
  methods: {
    clear: function () {
      this.$store.commit('compare_clear')
    }
  },
  components: {
    check: require('../check/main.vue')
  }
}
