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
