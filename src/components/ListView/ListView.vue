<template>
  <scroll
    ref="scroll"
    class="listview"
    :probeType="probeType"
    :listenScroll="listenScroll"
    @scroll="scroll"
  >
    <div>
      <ul>
        <li
          v-for="(group, index) in data"
          class="list-group"
          :key="index"
          ref="listGroup"
        >
          <h2 class="list-group-title">{{ group.label }}</h2>
          <uL>
            <li
              @click="selectItem(item)"
              v-for="(item, index) in group.singers"
              :key="index"
              class="list-group-item"
            >
              <img class="avatar" v-lazy="item.picUrl" />
              <span class="name">{{ item.name }}</span>
            </li>
          </uL>
        </li>
      </ul>
    </div>
    <div
      class="list-shortcut"
      @touchstart="onShortcutStart"
      @touchmove.stop.prevent="onShortcutMove"
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          class="item"
          :data-index="index"
          :key="item.id"
          :class="{ current: currentIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
      <div class="fixed-title">{{ fixedTitle }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/Scroll'
import { musicMixin } from '@/utils/mixin'
import { getDataAttr } from '@/utils/utils'

export default {
  mixins: [musicMixin],
  components: { Scroll },
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      scrollY: -1,
      diff: -1, // 顶部title的偏移
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((group) => {
        return group.label.slice(0, 1)
      })
    },
    fixedTitle() {
      if (this.scrollY > 0) {
        return '' // 往下滑动不变
      }
      return this.data[this.currentIndex]
        ? this.data[this.currentIndex].label
        : ''
    },
  },
  watch: {
    data: {
      handler() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      immediate: true,
    },
    scrollY(newY) {
      const listHeight = this.listHeight
      if (newY > 0) {
        this.currentIndex = 0 // 往下滑一直是第一个
        return
      }
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i]
        const height2 = listHeight[i + 1]
        // 往上滑Y是负值，落在区间时改变currentIndex,将偏移量变成第二高度减去滑动值
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      this.currentIndex = listHeight.length - 2
    },
    diff(newVal) {
      const TITLE_HEIGHT = this.$refs.fixed.clientHeight
      const fixedTop =
        newVal > 0 && newVal < TITLE_HEIGHT ? newVal - TITLE_HEIGHT : 0
      // 这个判断可以使下一个title顶到上一个title时才运行后面的代码，不必每次都要操作dom
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
    },
  },
  created() {
    this.touch = {}
    this.listenScroll = true
    this.listHeight = []
    this.probeType = 3
  },
  mounted() {
    this.setScrollWrapperHeight()
    this.$refs.scroll.refresh()
  },
  updated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y
    },
    onShortcutStart(e) {
      const anchorIndex = getDataAttr(e.target, 'index')
      const firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortcutMove(e) {
      const ANCHOR_HEIGHT = e.target.clientHeight
      const firshTouch = e.touches[0]
      this.touch.y2 = firshTouch.pageY
      const delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
      const anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    _scrollTo(index) {
      this.$refs.scroll.scrollToElement(this.$refs.listGroup[index], 0)
    },
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.listview {
  position: relative;
  // width: 100%;
  // height: 100%;
  // overflow: hidden;
  .list-group {
    padding-bottom: px2rem(30);
    .list-group-title {
      height: px2rem(25);
      line-height: px2rem(25);
      padding-left: px2rem(20);
      font-size: px2rem(18);
      background: $menu-color;
    }
    & .list-group-item {
      display: flex;
      align-items: center;
      padding: px2rem(10) 0 px2rem(10) px2rem(15);
      border-bottom: px2rem(1) solid $menu-color;
      .avatar {
        width: px2rem(60);
        height: px2rem(60);
        border-radius: 50%;
      }
      .name {
        margin-left: px2rem(20);
        font-size: px2rem(18);
      }
    }
  }
  .list-shortcut {
    position: absolute;
    right: 0;
    top: px2rem(40);
    width: px2rem(25);
    border-radius: px2rem(5);
    font-size: px2rem(15);
    text-align: center;
    padding: px2rem(10) 0;
    // background-color: $menu-color;
    .item {
      padding: px2rem(4) 0;
      line-height: 1;
      font-weight: bold;
      &.current {
        color: $main-color;
      }
    }
  }
  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: px2rem(25);
      line-height: px2rem(25);
      padding-left: px2rem(20);
      font-size: px2rem(18);
      background: $menu-color;
    }
  }
}
</style>
