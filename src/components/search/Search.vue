<template>
  <div class="search-wrapper">
    <input type="text" class="search-input" placeholder="搜索音乐、歌手、电台" />
  </div>
</template>

<script>
export default {}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.search-wrapper {
  width: px2rem(270);
  height: px2rem(35);
  background: $searchbar-bg;
  border-radius: px2rem(18);
  @include center;
  .search-input {
    border: none;
    outline: none;
    font-size: px2rem(18);
    background: $searchbar-bg;
    text-align: center;
  }
}
</style>
