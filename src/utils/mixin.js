import {
  mapGetters,
  mapActions
} from 'vuex'

export const musicMixin = {
  computed: {
    ...mapGetters([
      'hotSearchVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setHotSearchVisible'
    ])
  }
}
