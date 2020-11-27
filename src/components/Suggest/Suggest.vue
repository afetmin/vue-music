<template>
  <div class="suggest-wrapper">
    <div class="title-wrapper">
      <span class="text">{{ title }}</span>
      <span class="icon-right"></span>
    </div>
    <div class="suggest-list-wrapper">
      <div class="suggest-item" v-for="item in data" :key="item.id">
        <div class="suggest-item-img-wrapper">
          <div class="suggest-img-icon-wrapper">
            <span class="suggest-img-icon"></span>
            <span class="suggest-img-text">{{ item.playCount }}</span>
          </div>
          <img :src="item.picUrl" class="suggest-item-img" />
        </div>
        <div class="suggest-item-text-wrapper">
          <span class="suggest-item-text">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.suggest-wrapper {
  width: 100%;
  .title-wrapper {
    height: px2rem(47);
    line-height: px2rem(47);
  }
  .suggest-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .suggest-item {
      flex: 1 0 px2rem(125);
      width: px2rem(125);
      .suggest-item-img-wrapper {
        height: px2rem(125);
        position: relative;
        .suggest-img-icon-wrapper {
          position: absolute;
          right: 0;
          color: white;
          width: px2rem(70);
          height: px2rem(30);
          line-height: px2rem(30);
          text-align: center;
        }
        .suggest-item-img {
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }
      .suggest-item-text-wrapper {
        height: px2rem(56);
        padding: px2rem(10) 0;
        box-sizing: border-box;
        .suggest-item-text {
          font-size: px2rem(15);
          @include ellipsis2(2);
        }
      }
    }
  }
}
</style>
