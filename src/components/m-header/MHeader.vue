<template>
  <div class="m-header">
    <div class="voice-wrapper">
      <span class="icon-voice"></span>
    </div>
    <search></search>
    <div class="sound-wrapper" @click="gotoPlay">
      <span class="icon-sound"></span>
    </div>
  </div>
</template>

<script>
import Search from '../search/Search.vue'
export default {
  components: {
    Search,
  },
  methods: {
    gotoPlay() {
      console.log('gotoPlay')
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.m-header {
  width: 100%;
  height: px2rem(52);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 px2rem(20);
  border-bottom: px2rem(1) solid $searchbar-bg;
  .voice-wrapper {
    .icon-voice {
      font-size: px2rem(28);
    }
  }
  .sound-wrapper {
    .icon-sound {
      font-size: px2rem(28);
    }
  }
}
</style>
