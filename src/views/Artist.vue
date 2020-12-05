<template>
  <div>
    <list-view :data="singers"></list-view>
  </div>
</template>

<script>
import ListView from '../components/ListView/ListView.vue'
import { musicMixin } from '@/utils/mixin'
import axios from 'axios'
export default {
  mixins: [musicMixin],
  components: { ListView },
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
  mounted() {},
  updated() {},
  methods: {},
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
</style>
