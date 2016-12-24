module.exports = {
  methods: {
    close: function () {
      this.$store.dispatch('modal_close')
    }
  }
}
