<template>
  <div class="nav-bar">
    <van-tabs
      v-model="active"
      swipeable
      animated
      lazy-render
      :line-width="lineWidth"
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
export default {
  components: {},
  props: {
    navs: {
      type: Array,
    },
  },
  data() {
    return {
      active: 0,
    }
  },
  computed: {
    lineWidth() {
      const lineWidth = window.innerWidth / this.navs.length
      return lineWidth
    },
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
