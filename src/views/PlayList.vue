<template>
  <scroll class="scroll-wrapper" ref="scroll">
    <div>
      <single-sug :singInfo="singInfo"></single-sug>
      <suggest :data="allPlayList" :columns="2" showPlayCount></suggest>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../components/common/Scroll.vue'
import SingleSug from '../components/SingleSug/SingleSug.vue'
import Suggest from '../components/Suggest/Suggest.vue'
import { musicMixin } from '@/utils/mixin'
export default {
  mixins: [musicMixin],
  components: { SingleSug, Suggest, Scroll },
  data() {
    return {
      singInfo: {
        id: 5295437787,
        more: '听歌写评论',
        info: '说唱||请接收一封棒棒糖一样甜的情书',
        title: '编辑推荐',
        picUrl:
          'https://p1.music.126.net/A5vMlKxhsLYqRQLZKYydWQ==/109951165226049642.jpg',
      },
      allPlayList: {
        title: '全部歌单',
        data: [
          {
            id: 5295437787,
            type: 0,
            name: '说唱||请接收一封棒棒糖一样甜的情书',
            copywriter: '编辑推荐：你听过Rapper的纯情告白吗？',
            picUrl:
              'https://p1.music.126.net/y7sIT-TUFW__qQaWUDiH9w==/109951165401040825.jpg',
            canDislike: false,
            trackNumberUpdateTime: 1604107047318,
            playCount: 432359,
            trackCount: 75,
            highQuality: false,
            alg: 'featured',
          },
          {
            id: 5146965725,
            type: 0,
            name: '你-总是有各种理由让我放弃你☹',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/A5vMlKxhsLYqRQLZKYydWQ==/109951165226049642.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1606317560640,
            playCount: 7106361,
            trackCount: 113,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 5259513986,
            type: 0,
            name: '开头就炸适合喜欢直接炸上来就high的朋友',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/v_-wonc6yEl9UVa-aPNOSQ==/109951165350855516.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1605901510677,
            playCount: 1397648,
            trackCount: 98,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 4902993392,
            type: 0,
            name: '『精选翻唱』万人血书求完整～',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/-GTsAjT-DrMJ8MtAAk7ROg==/109951164865582712.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1606119958999,
            playCount: 1251279,
            trackCount: 230,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 739999145,
            type: 0,
            name: '抖断腿系列｜后面的朋友让我看到你们的双腿',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/iHhjPIgH4UmdJOoaBYJz-w==/19123805742064721.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1604759025478,
            playCount: 636945,
            trackCount: 99,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 5159439062,
            type: 0,
            name: '留给我们的夏天，大概还有一首歌那么长',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1602552649164,
            playCount: 5295107,
            trackCount: 32,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 2825687395,
            type: 0,
            name: '「港樂」為何還喜歡我 我這種無賴',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/S5i1X-Ly6QkeNurdzwZyFQ==/109951164503687341.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1604917554716,
            playCount: 418268,
            trackCount: 687,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 2335040083,
            type: 0,
            name: '我愿你好，即使后来你与我无关。',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/bLaLxfeZ4KK8UwxKNKYkfQ==/109951165346753399.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1606191704254,
            playCount: 1747167,
            trackCount: 171,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 977598259,
            type: 0,
            name: '你是我自罚三杯也不肯开口的秘密',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/YYJZ3761_2R55rgYPK9uBw==/18709289860436044.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1523941450429,
            playCount: 43880068,
            trackCount: 63,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
          {
            id: 125829896,
            type: 0,
            name: '【超燃】肾上腺素爆发✘力量训练必备',
            copywriter: '热门推荐',
            picUrl:
              'https://p1.music.126.net/_55t4c9ZC3uYlYUsWuS57Q==/3261151492420178.jpg',
            canDislike: true,
            trackNumberUpdateTime: 1574217349338,
            playCount: 953650,
            trackCount: 37,
            highQuality: false,
            alg: 'cityLevel_unknow',
          },
        ],
      },
    }
  },
  mounted() {
    this.setScrollWrapperHeight()
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
</style>
