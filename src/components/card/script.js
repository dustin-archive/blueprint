module.exports = {
  props: ['id'],
  computed: {
    active: function () {
      return this.$store.state.compare.queue.indexOf(this.id) !== -1 && ['-active']
    }
  },
  methods: {
    place: function () {
      this.$store.commit('compare_place', this.id)
    }
  },
  components: {
    'v-button': require('../button/main.vue')
  }
}
