<template>
  <div class="nav-bar">
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="nav-link">推荐</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/playlist">
      <span class="nav-link">歌单</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/artist">
      <span class="nav-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="nav-link">排行</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.nav-bar {
  @include center;
  width: 100%;
  box-sizing: border-box;
  height: px2rem(42);
  border-bottom: px2rem(1) solid $searchbar-bg;
  .nav-item {
    flex: 1 0 px2rem(94);
    width: px2rem(94);
    height: 100%;
    @include center;
  }
  .router-link-active {
    &.nav-item {
      border-bottom: px2rem(2) solid $main-color;
    }
    .nav-link {
      color: $main-color;
    }
  }
}
</style>
