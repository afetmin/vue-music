import {
  mapGetters,
  mapActions
} from 'vuex'

export const musicMixin = {
  computed: {
    ...mapGetters([
      'hotSearchVisible',
      'topHeight'
    ])
  },
  methods: {
    ...mapActions([
      'setHotSearchVisible',
      'setTopHeight'
    ]),
    setScrollWrapperHeight() {
      this.$refs.scroll.$el.style.height =
        window.innerHeight - this.topHeight + 'px'
    },
  }
}
