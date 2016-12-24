module.exports = {
  mixins: [
    require('./compare-share.js')
  ],
  methods: {
    compare: function () {
      this.$store.dispatch('modal_open', 'compare')
    }
  }
}
