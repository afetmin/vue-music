<template>
  <div id="app" @touchmove.prevent>
    <m-header ref="mheader"></m-header>
    <nav-bar :navs="navs" ref="navbar"></nav-bar>
    <!-- <keep-alive>
      <router-view />
    </keep-alive> -->
  </div>
</template>
<script>
import MHeader from './components/m-header/MHeader'
import NavBar from './components/NavBar/NavBar'
import Recommend from './views/Recommend'
import PlayList from './views/PlayList'
import Artist from './views/Artist'
import Rank from './views/Rank'
import { musicMixin } from '@/utils/mixin'

const MAX_FONT_SIZE = 420
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  console.log(fontSize)
  html.style.fontSize = fontSize
})

export default {
  mixins: [musicMixin],
  components: {
    MHeader,
    NavBar,
  },
  data() {
    return {}
  },
  computed: {
    navs() {
      return [
        {
          title: '推荐',
          component: Recommend,
        },
        {
          title: '歌单',
          component: PlayList,
        },
        {
          title: '歌手',
          component: Artist,
        },
        {
          title: '排行',
          component: Rank,
        },
      ]
    },
  },
  mounted() {
    this.calcTopHeight()
  },
  methods: {
    calcTopHeight() {
      const height =
        this.$refs.mheader.$el.clientHeight + this.$refs.navbar.$el.clientHeight
      this.setTopHeight(height)
    },
  },
}
</script>
<style lang="scss">
#app {
  overflow: hidden;
  height: 100%;
  // height: 100vh;
}
</style>
