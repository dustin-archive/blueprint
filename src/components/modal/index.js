module.exports = {
  template: '#modal',
  methods: {
    close: function () {
      this.$store.dispatch('modal_close')
    }
  }
}
