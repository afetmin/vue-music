<template>
  <scroll ref="scroll" class="scroll-wrapper">
    <list-view></list-view>
  </scroll>
</template>

<script>
import Scroll from '../components/common/Scroll.vue'
import ListView from '../components/ListView/ListView.vue'
import { getSinger } from '@/api/singer'

const HOT_NAME_LEN = 5

export default {
  components: { Scroll, ListView },
  mounted() {
    Promise.all([this._getHotSingerList(), this._getCharSingerList()]).then(
      (data) => {
        console.log(data)
      }
    )
  },
  methods: {
    _getHotSingerList() {
      return getSinger(-1, 5).then((res) => {
        if (res.code === 200) {
          return Promise.resolve(res.artists)
        }
      })
    },
    _getCharSingerList() {
      return getSinger(undefined, 100).then((res) => {
        if (res.code === 200) {
          return Promise.resolve(res.artists)
        }
      })
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
</style>
