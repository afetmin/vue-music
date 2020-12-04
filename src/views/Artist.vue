<template>
  <scroll ref="scroll" class="scroll-wrapper">
    <list-view :data="singers"></list-view>
  </scroll>
</template>

<script>
import Scroll from '../components/common/Scroll.vue'
import ListView from '../components/ListView/ListView.vue'
import { musicMixin } from '@/utils/mixin'
import axios from 'axios'
export default {
  mixins: [musicMixin],
  components: { Scroll, ListView },
  data() {
    return {
      singers: [],
    }
  },
  created() {
    axios({
      url: './singerlist.json',
      method: 'get',
    }).then((res) => {
      this.singers = res.data
    })
  },
  mounted() {
    console.log(this.$refs.scroll)
    this.setScrollWrapperHeight()
    this.$refs.scroll.refresh()
  },
  updated() {
    this.$refs.scroll.refresh()
  },
  methods: {},
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
</style>
