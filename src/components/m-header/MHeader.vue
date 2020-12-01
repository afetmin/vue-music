<template>
  <div class="m-header">
    <div class="voice-wrapper" v-if="!hotSearchVisible">
      <span class="icon-voice"></span>
    </div>
    <div class="search-wrapper">
      <input
        type="text"
        class="search-input"
        placeholder="搜索音乐、歌手、电台"
        @click="showHotSearch"
        v-model="searchText"
        @keyup.13.exact="search"
      />
      <transition name="hot-search-move">
        <hot-search v-if="hotSearchVisible"></hot-search>
      </transition>
    </div>
    <div class="search-cancel-wrapper" @click="back" v-if="hotSearchVisible">
      <span class="cancel-text">取消</span>
    </div>
    <div class="sound-wrapper" @click="gotoPlay" v-else>
      <span class="icon-sound"></span>
    </div>
  </div>
</template>

<script>
import HotSearch from '../search/HotSearch'
import { musicMixin } from '@/utils/mixin'
export default {
  mixins: [musicMixin],
  components: {
    HotSearch,
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    search() {},
    gotoPlay() {
      console.log('gotoPlay')
    },
    back() {
      this.hideHotSearch()
    },
    hideHotSearch() {
      this.setHotSearchVisible(false)
    },
    showHotSearch() {
      this.setHotSearchVisible(true)
    },
  },
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
  .search-wrapper {
    flex: 1;
    // width: px2rem(270);
    height: px2rem(35);
    margin: px2rem(15);
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
  .search-cancel-wrapper {
    .cancel-text {
    }
  }
  .sound-wrapper {
    .icon-sound {
      font-size: px2rem(28);
    }
  }
}
</style>
