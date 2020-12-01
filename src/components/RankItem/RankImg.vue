<template>
  <div :class="imgWrapper">
    <div class="img-mask-wrapper">
      <img v-lazy="imgUrl" />
      <div class="img-mask" v-if="updateFrequency">
        <span class="img-mask-title">{{ updateFrequency }}</span>
      </div>
    </div>
    <div class="img-title" v-if="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
    },
    updateFrequency: {
      type: String,
    },
    title: {
      type: String,
    },
    imgType: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    imgWrapper() {
      return this.imgType === 1 ? 'img-wrapper' : 'img-big-wrapper'
    },
  },
  methods: {},
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.img-wrapper {
  width: px2rem(100);
  height: px2rem(100);
  .img-mask-wrapper {
    position: relative;
    img {
      width: 100%;
      border-radius: px2rem(5);
    }
    .img-mask {
      position: absolute;
      bottom: px2rem(1);
      left: 0;
      right: 0;
      height: 25%;
      padding: px2rem(5);
      box-sizing: border-box;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      text-align: center;
      border-radius: px2rem(5);
      .img-mask-title {
        color: white;
        display: inline-block;
        font-size: px2rem(14);
      }
    }
  }
}
.img-big-wrapper {
  .img-mask-wrapper {
    position: relative;
    img {
      width: px2rem(130);
      height: px2rem(130);
      border-radius: px2rem(5);
    }
    .img-mask {
      position: absolute;
      bottom: px2rem(1);
      left: 0;
      right: 0;
      height: 25%;
      padding: px2rem(5);
      box-sizing: border-box;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      text-align: center;
      border-radius: px2rem(5);
      .img-mask-title {
        color: white;
        display: inline-block;
        font-size: px2rem(14);
      }
    }
  }
  .img-title {
    font-size: px2rem(15);
    width: px2rem(130);
    line-height: px2rem(20);
  }
}
</style>
