<template>
  <div class="single-wrapper">
    <div :class="imgWrapper">
      <img v-lazy="singInfo.picUrl" />
    </div>
    <div :class="descWrapper">
      <div class="desc-title" v-if="singInfo.title">
        {{ singInfo.title }}
        <span class="icon-right"></span>
      </div>
      <div class="desc-info">{{ singInfo.info }}</div>
      <div class="desc-more">{{ singInfo.more }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singInfo: {
      type: Object,
    },
    imgType: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    imgWrapper() {
      return this.imgType === 1 ? 'img-big-wrapper' : 'img-wrapper'
    },
    descWrapper() {
      return this.imgType === 1 ? 'desc-big-wrapper' : 'desc-wrapper'
    }
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.single-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: $single-bg-color;
  padding: px2rem(15);
  color: white;
  .img-wrapper {
    width: px2rem(90);
    margin-right: px2rem(10);
    img {
      width: 100%;
      border-radius: px2rem(5);
    }
  }
  .img-big-wrapper {
    width: px2rem(120);
    margin-right: px2rem(10);
    img {
      width: 100%;
      border-radius: px2rem(5);
    }
  }
  .desc-big-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: px2rem(100);
    .desc-title {
      font-size: px2rem(19);
      height: px2rem(35);
      .icon-right {
        vertical-align: -8%;
      }
    }
    .desc-info {
      font-size: px2rem(18);
      margin-top: px2rem(5);
    }
    .desc-more {
      font-size: px2rem(16);
      line-height: px2rem(25);
      color: #d9d9d9;
      margin-top: px2rem(3);
    }
  }
  .desc-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: px2rem(80);
    .desc-title {
      font-size: px2rem(20);
      height: px2rem(35);
      .icon-right {
        vertical-align: -8%;
      }
    }
    .desc-info {
      font-size: px2rem(18);
      margin-top: px2rem(5);
    }
    .desc-more {
      font-size: px2rem(16);
      line-height: px2rem(25);
      color: #d9d9d9;
      margin-top: px2rem(3);
    }
  }
}
</style>
