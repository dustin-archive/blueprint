module.exports = {
  mixins: [
    require('../compare/mixin.js')
  ],
  methods: {
    close: function () {
      this.$store.dispatch('modal_close')
    }
  }
}
