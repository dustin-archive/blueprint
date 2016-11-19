var share = {
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
    check: require('components/check')
  }
}

exports.compare = {
  template: '#compare',
  mixins: [share],
  methods: {
    compare: function () {
      this.$store.dispatch('modal_open', 'compare')
    }
  }
}

exports.compare_modal = {
  template: '#compare_modal',
  mixins: [share],
  methods: {
    close: function () {
      this.$store.dispatch('modal_close')
    }
  }
}
