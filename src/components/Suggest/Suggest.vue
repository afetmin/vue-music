<template>
  <div class="suggest-wrapper">
    <div class="title-wrapper">
      <span class="text">{{ data.title }}</span>
      <span class="icon-right"></span>
    </div>
    <div class="suggest-list-wrapper">
      <div :class="colClass" v-for="item in handleData" :key="item.id">
        <div class="suggest-item-img-wrapper">
          <div class="suggest-img-icon-wrapper" v-show="showPlayCount">
            <span class="icon-headphones"></span>
            <span class="suggest-img-text">{{
              item.playCount | handleMillion
            }}</span>
          </div>
          <img v-lazy="item.picUrl" class="suggest-item-img" />
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
    data: {
      type: Object,
    },
    columns: {
      type: Number,
      default: 3,
    },
    showPlayCount: {
      type: Boolean,
      default: false,
    },
  },
  filters: {
    handleMillion(num) {
      if (!num) return ''
      return `${Math.floor(num / 1e4) > 0 ? Math.floor(num / 1e4) : num}万`
    },
  },
  computed: {
    handleData() {
      if (this.data && this.data.data.length > 6) {
        return this.data.data.slice(0, 6)
      }
      return this.data.data
    },
    colClass() {
      return this.columns === 3 ? 'suggest-item' : 'suggest-two-item'
    },
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.suggest-wrapper {
  width: 100%;
  .title-wrapper {
    height: px2rem(48);
    line-height: px2rem(48);
    padding-left: px2rem(8);
    .icon-right {
      display: inline-block;
      vertical-align: middle;
      margin-bottom: px2rem(2);
      font-size: px2rem(22);
    }
  }
  .suggest-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .suggest-item {
      flex: 0 0 px2rem(144);
      width: px2rem(144);
      .suggest-item-img-wrapper {
        // height: px2rem(144);
        position: relative;

        .suggest-img-icon-wrapper {
          position: absolute;
          right: 0;
          color: white;
          width: px2rem(70);
          height: px2rem(30);
          line-height: px2rem(30);
          text-align: right;
          padding-right: px2rem(5);
          font-size: px2rem(14);
          .suggest-img-text {
            margin-left: px2rem(5);
          }
        }
        .suggest-item-img {
          border-radius: px2rem(5);
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }
      .suggest-item-text-wrapper {
        height: px2rem(56);
        margin-top: px2rem(10);
        // padding: px2rem(10) 0;
        // box-sizing: border-box;
        .suggest-item-text {
          font-size: px2rem(16);
          line-height: px2rem(20);
          @include ellipsis2(2);
        }
      }
    }
    .suggest-two-item {
      flex: 0 0 px2rem(210);
      width: px2rem(210);
      .suggest-item-img-wrapper {
        position: relative;

        .suggest-img-icon-wrapper {
          position: absolute;
          right: 0;
          color: white;
          width: px2rem(70);
          height: px2rem(30);
          line-height: px2rem(30);
          text-align: right;
          padding-right: px2rem(5);
          font-size: px2rem(14);
          .suggest-img-text {
            margin-left: px2rem(5);
          }
        }
        .suggest-item-img {
          border-radius: px2rem(5);
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }
      .suggest-item-text-wrapper {
        height: px2rem(56);
        margin-top: px2rem(10);
        // padding: px2rem(10) 0;
        // box-sizing: border-box;
        .suggest-item-text {
          font-size: px2rem(16);
          line-height: px2rem(20);
          @include ellipsis2(2);
        }
      }
    }
  }
}
</style>
