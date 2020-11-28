<template>
  <div>
    <scroll class="scroll-wrapper">
      <!-- 默认选第一个content进行滚动 -->
      <div class="scroll">
        <swipper :banners="banners"></swipper>
        <three-menu></three-menu>
        <suggest :title="sugtitle" :data="personalized" showPlayCount></suggest>
        <suggest :title="newMusicTitle" :data="newSongs"></suggest>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../components/common/Scroll.vue'
import Suggest from '../components/Suggest/Suggest.vue'
import Swipper from '../components/swipper/Swipper'
import ThreeMenu from '../components/ThreeMenu/ThreeMenu.vue'
export default {
  components: {
    Swipper,
    ThreeMenu,
    Suggest,
    Scroll,
  },
  data() {
    return {
      sugtitle: '推荐歌单',
      newMusicTitle: '最新音乐',
      personalized: [
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
      banners: [
        {
          pic:
            'http://p1.music.126.net/C07ZG_n10nztZvPz3pIJ4g==/109951165502097840.jpg',
          targetId: 0,
          adid: null,
          targetType: 3000,
          titleColor: 'blue',
          typeTitle: '独家策划',
          url: 'https://music.163.com/m/at/5facf735568306ae9b844fb0',
        },
        {
          pic:
            'http://p1.music.126.net/yAl90R7qGU8hPx3sNtkFVg==/109951165502105749.jpg',
          targetId: 73876792,
          adid: null,
          targetType: 10,
          titleColor: 'red',
          typeTitle: '独家',
          url: null,
        },
        {
          pic:
            'http://p1.music.126.net/YV10yyFPG2YDD7G6RaoWdQ==/109951165501897443.jpg',
          targetId: 5352776096,
          adid: null,
          targetType: 1000,
          titleColor: 'red',
          typeTitle: '独家',
          url: null,
        },
        {
          pic:
            'http://p1.music.126.net/oeoCZPs045qBEpdWlcFXZw==/109951165502117160.jpg',
          targetId: 1498342485,
          adid: null,
          targetType: 1,
          titleColor: 'red',
          typeTitle: '新歌首发',
          url: null,
        },
      ],
      newSongs: [
        {
          id: 1496049979,
          type: 4,
          name: 'Night Odyssey',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/UMSIOnIS6revSZk2ID2nxA==/109951165476261090.jpg',
        },
        {
          id: 1498312209,
          type: 4,
          name: '不及你',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/pET9u1o8gZNH2L0DdtRziw==/109951165498272084.jpg',
        },
        {
          id: 1498335377,
          type: 4,
          name: '阿婆',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/oxqExhUGDYZioU49bTiA-A==/109951165498533820.jpg',
        },
        {
          id: 1498317072,
          type: 4,
          name: '采仙草',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/9C4AtgG_kgdOJMwCnIe6Cg==/109951165498280120.jpg',
        },
        {
          id: 1498323714,
          type: 4,
          name: '百万富翁（Millionaire）',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/k_wIauknmplXlN_xJSx9hA==/109951165498406736.jpg',
        },
        {
          id: 1498051726,
          type: 4,
          name: '兜风',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/nDf4-LgGD27uJda6qCB9Fw==/109951165495725897.jpg',
        },
        {
          id: 1498317246,
          type: 4,
          name: '发光的我',
          copywriter: null,
          picUrl:
            'http://p1.music.126.net/VyWbWjDhJIK7RFA3kBN8CA==/109951165498305410.jpg',
        },
      ],
    }
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
// 设置去除头部的滚动区域wrapper
.scroll-wrapper {
  overflow: hidden;
  position: absolute;
  top: px2rem(94);
  bottom: 0;
}
</style>
