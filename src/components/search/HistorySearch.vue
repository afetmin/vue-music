<template>
  <div class="history-search-wrapper">
    <div
      class="history-search-item"
      v-for="item in historySearchList"
      :key="item.id"
    >
      <div class="history-text-wrapper">
        <span class="icon-music"></span>
        <span class="text">{{ item.text }}</span>
      </div>
      <div class="history-icon-wrapper">
        <span class="icon-chevron-right"></span>
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
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.history-search-wrapper {
  margin-top: px2rem(20);
  .history-search-item {
    display: flex;
    justify-content: space-between;
    height: px2rem(60);
    line-height: px2rem(60);
    border-bottom: px2rem(1) solid $bg-color;
    .history-text-wrapper {
    }
    .history-icon-wrapper {
      font-size: px2rem(20);
    }
  }
}
</style>
