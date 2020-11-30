<template>
  <scroll ref="scroll" class="scroll-wrapper">
    <div class="scroll">
      <div class="rank-wrapper">
        <div class="title">官方榜</div>
        <div class="rank-item-list">
          <rank-item
            class="rank-item"
            v-for="item in ranklist"
            :key="item.id"
            :rankitem="item"
          ></rank-item>
        </div>
      </div>
      <div class="rank-wrapper">
        <div class="title">全球榜</div>
        <div class="rank-uk-wrapper">
          <rank-img
            class="rank-img"
            v-for="img in rankUkList"
            :key="img.id"
            :title="img.name"
            :imgUrl="img.coverImgUrl"
            :imgType="2"
            :updateFrequency="img.updateFrequency"
          ></rank-img>
        </div>
      </div>
      <div class="rank-wrapper">
        <div class="title">地区榜</div>
        <div class="rank-area-wrapper">
          <rank-img
            class="rank-img"
            v-for="img in rankAreaList"
            :key="img.id"
            :title="img.name"
            :imgUrl="img.coverImgUrl"
            :imgType="2"
            :updateFrequency="img.updateFrequency"
          ></rank-img>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../components/common/Scroll.vue'
import { musicMixin } from '@/utils/mixin'
import RankItem from '../components/RankItem/RankItem.vue'
import { getRankList } from '@/api/ranklist'
import RankImg from '../components/RankItem/RankImg.vue'
export default {
  mixins: [musicMixin],
  components: { Scroll, RankItem, RankImg },
  data() {
    return {
      ranklist: null,
      rankUkList: null,
      rankAreaList: null,
    }
  },
  created() {
    this.initGetRank()
  },
  mounted() {
    this.setScrollWrapperHeight()
    // 当图片全部加载完成后调用refresh方法，更新bs
    Promise.all(this.imgAllLoad()).then(() => {
      this.$refs.scroll.refresh()
    })
  },
  updated() {
    // 数据异步获取后，渲染到页面上，也要更新 bs，否则bs的高度正确，但是 hasVerticalScroll是false
    this.$refs.scroll.refresh()
  },
  methods: {
    initGetRank() {
      getRankList().then((data) => {
        if (data.code === 200) {
          const { list } = data
          this.ranklist = list.filter((item) => {
            return item.tracks.length > 0
          })
          this.rankUkList = list.filter((item) => {
            return item.tags.includes('欧美')
          })
          this.rankAreaList = list.filter((item) => {
            return (
              item.tags.includes('韩语') ||
              item.tags.includes('日语') ||
              item.tags.includes('英伦')
            )
          })
        }
      })
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.scroll {
  padding: px2rem(10);
  .rank-wrapper {
    box-sizing: border-box;
    .title {
      height: px2rem(50);
      line-height: px2rem(50);
    }
    .rank-item-list {
      display: flex;
      flex-direction: column;
      .rank-item {
        margin-bottom: px2rem(10);
      }
    }
    .rank-uk-wrapper,
    .rank-area-wrapper {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      .rank-img {
        margin-bottom: px2rem(10);
      }
    }
  }
}
</style>
