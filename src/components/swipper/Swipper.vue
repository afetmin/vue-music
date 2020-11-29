<template>
  <div class="swipper-wrapper">
    <slider v-if="banners" :bannersLen="banners.length">
      <div class="swipper-item" v-for="item in banners" :key="item.targetId">
        <img :src="item.pic" />
      </div>
    </slider>
  </div>
</template>

<script>
import Slider from '../common/Slider.vue'
export default {
  components: { Slider },
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
  .swipper-item {
    display: inline-block;
    width: 100%;
    height: px2rem(150);
    overflow: hidden;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
