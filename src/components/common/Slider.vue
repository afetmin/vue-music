<template>
  <div class="banner-wrapper">
    <div class="slide-banner-wrapper" ref="slide">
      <div class="slide-banner-content">
        <slot></slot>
      </div>
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="num in bannersLen"
          :key="num"
          :class="{ active: currentPageIndex === num - 1 }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
BScroll.use(Slide)

export default {
  data() {
    return {
      nums: 4,
      currentPageIndex: 0 /* 当前页下标 */,
    }
  },
  props: {
    isLoop: {
      /* 循环播放 */ type: Boolean,
      default: true,
    },
    isAutoPlay: {
      /* 自动播放 */ type: Boolean,
      default: true,
    },
    interval: {
      /* 播放间隔 */ type: Number,
      default: 2000,
    },
    bannersLen: {
      type: Number,
    },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.slide.destroy()
  },
  computed: {},
  methods: {
    init() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        slide: true,
        autoplay: this.isAutoPlay,
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true,
        probeType: 2,
      })
      this.slide.on('scrollEnd', this._onScrollEnd)

      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
    },
    _onScrollEnd() {
      // console.log(this.slide.getCurrentPage())
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global';
.banner-wrapper {
  position: relative;
  .slide-banner-wrapper {
    .slide-banner-content {
      height: 100%;
    }
    .dots-wrapper {
      position: absolute;
      bottom: px2rem(5);
      left: 50%;
      transform: translate(-50%, 0); // 居中
      .dot {
        display: inline-block;
        margin: 0 px2rem(4);
        width: px2rem(8);
        height: px2rem(8);
        border-radius: 50%;
        background: #eee;
        &.active {
          width: px2rem(15);
          border-radius: px2rem(5);
        }
      }
    }
  }
}
</style>
