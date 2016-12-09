var fs = require('fs')

module.exports = {
  template: fs.readFileSync(__dirname + '/template.html', 'utf8'),
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
  }
}
