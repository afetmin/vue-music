<template>
  <div class="nav-bar">
    <van-tabs
      v-model="active"
      swipeable
      animated
      lazy-render
      :line-height="2"
      :title-active-color="titleActiveColor"
      ref="vantabs"
    >
      <van-tab
        v-for="(item, index) in navs"
        :title="item.title"
        :key="index"
        :to="item.path"
      >
        <component :is="item.component"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
const routerMap = {
  recommend: 0,
  playlist: 1,
  artist: 2,
  rank: 3,
}
export default {
  components: {},
  props: {
    navs: {
      type: Array,
    },
  },
  data() {
    return {
      active: 2,
    }
  },
  watch: {
    active(index) {
      switch (index) {
        case routerMap.recommend:
          this.$router.push('/recommend')
          break
        case routerMap.playlist:
          this.$router.push('/playlist')
          break
        case routerMap.artist:
          this.$router.push('/artist')
          break
        case routerMap.rank:
          this.$router.push('/rank')
          break
      }
    },
  },
  computed: {
    titleActiveColor() {
      return '#ee0a24'
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.nav-bar {
  /deep/ .van-tabs__wrap {
    border-bottom: px2rem(1) solid $searchbar-bg;
  }
}
</style>
