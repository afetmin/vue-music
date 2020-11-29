<template>
  <van-swipe class="swipper-wrapper" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in banners" :key="item.targetId">
      <img v-lazy="item.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  components: {},
  props: {
    banners: {
      type: Array,
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.swipper-wrapper {
  width: 100vw;
  height: px2rem(150);
  background: $searchbar-bg;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
