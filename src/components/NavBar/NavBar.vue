<template>
  <div class="nav-bar">
    <van-tabs v-model="active" swipeable animated>
      <van-tab v-for="(item, index) in navs" :title="item.title" :key="index">
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
