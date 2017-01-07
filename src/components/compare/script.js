module.exports = {
  mixins: [
    require('./mixin.js')
  ],
  methods: {
    compare: function () {
      this.$store.dispatch('modal_open', 'compare')
    }
  }
}
