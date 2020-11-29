<template>
  <div class="history-search-wrapper">
    <div class="history-search-item" v-for="item in historyList" :key="item.id">
      <div class="history-text-wrapper">
        <span class="icon-clock"></span>
        <span class="text">{{ item.text }}</span>
      </div>
      <div class="history-icon-wrapper" @click="removeHistory(item.id)">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    historySearchList: {
      type: Array,
    },
  },
  data() {
    return {
      historyList: this.historySearchList,
    }
  },
  methods: {
    removeHistory(id) {
      this.historyList = this.historyList.filter((item) => {
        return item.id !== id
      })
      this.$emit('scrollRefresh') // 删除后需要重新计算dom，是否可滚动
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.history-search-wrapper {
  margin-top: px2rem(20);
  .history-search-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(60);
    line-height: px2rem(60);
    border-bottom: px2rem(1) solid $bg-color;
    .history-text-wrapper {
      .icon-clock {
        font-size: px2rem(25);
        vertical-align: -8%;
      }
      .text {
        display: inline-block;
        margin-left: px2rem(10);
      }
    }
    .history-icon-wrapper {
      font-size: px2rem(25);
      .icon-close {
        vertical-align: -8%;
      }
    }
  }
}
</style>
