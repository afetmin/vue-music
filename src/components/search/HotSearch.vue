<template>
  <transition name="hot-search-move">
    <scroll class="hot-search-wrapper" ref="scroll">
      <div>
        <div class="hot-search-title">热门搜索</div>
        <div class="hot-search-content-wrapper">
          <span
            class="hot-search-item"
            v-for="item in hotSearchList"
            :key="item.id"
            >{{ item.text }}</span
          >
        </div>
        <history-search :historySearchList="historySearchList" @scrollRefresh="scrollRefresh"></history-search>
      </div>
    </scroll>
  </transition>
</template>

<script>
import Scroll from '@/components/common/Scroll'
import HistorySearch from './HistorySearch.vue'
export default {
  components: {
    Scroll,
    HistorySearch,
  },
  data() {
    return {
      hotSearchList: [
        {
          id: 1,
          text: '动物世界',
        },
        {
          id: 2,
          text: '动物世界',
        },
        {
          id: 3,
          text: '动物世界',
        },
        {
          id: 4,
          text: '皮皮虾我们走',
        },
        {
          id: 5,
          text: '动物世界',
        },
        {
          id: 6,
          text: '动物世界',
        },
        {
          id: 7,
          text: '周杰伦',
        },
        {
          id: 8,
          text: '张国荣',
        },
      ],
      historySearchList: [
        {
          id: 1,
          text: '是东红军',
        },
        {
          id: 2,
          text: '是东红军',
        },
        {
          id: 3,
          text: '是东红军',
        },
        {
          id: 4,
          text: '是东红军',
        },
        {
          id: 5,
          text: '是东红军',
        },
        {
          id: 6,
          text: '是东红军',
        },
        {
          id: 7,
          text: '是东红军',
        },
        {
          id: 8,
          text: '是东红军',
        },
        {
          id: 9,
          text: '是东红军',
        },
        {
          id: 10,
          text: '是东红军',
        },
        {
          id: 11,
          text: '是东红军',
        },
      ],
    }
  },
  methods: {
    scrollRefresh() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.hot-search-wrapper {
  position: absolute;
  overflow: hidden;
  top: px2rem(52);
  bottom: 0;
  left: 0;
  z-index: 100;
  background: white;
  padding: px2rem(15);
  color: $font-color;
  font-size: px2rem(18);
  background-color: $search-bg-color;
  .hot-search-title {
    line-height: px2rem(40);
    height: px2rem(40);
  }
  .hot-search-content-wrapper {
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
    .hot-search-item {
      display: inline-block;
      padding: px2rem(10);
      background: $bg-color;
      margin: px2rem(10);
      margin-left: 0;
    }
  }
}
</style>
