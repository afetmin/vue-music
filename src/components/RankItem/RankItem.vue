<template>
  <div class="rank-item-wrapper">
    <rank-img
      :imgUrl="rankitem.coverImgUrl"
      :updateFrequency="rankitem.updateFrequency"
    ></rank-img>
    <div class="song-list-wrapper">
      <div
        class="song-list-item"
        v-for="(song, index) in rankitem.tracks"
        :key="index"
      >
        {{ index+1 + '.' +song.first + '-' + song.second }}
      </div>
    </div>
  </div>
</template>

<script>
import RankImg from './RankImg.vue'
export default {
  components: { RankImg },
  props: {
    rankitem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.rank-item-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: px2rem(16);
  height: px2rem(100);
  .song-list-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: px2rem(10);
    height: 100%;
    .song-list-item {
    }
  }
}
</style>
