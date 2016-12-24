module.exports = {
  mixins: [
    require('./compare-share.js')
  ],
  methods: {
    close: function () {
      this.$store.dispatch('modal_close')
    }
  }
}
