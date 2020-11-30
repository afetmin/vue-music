import {
  mapGetters,
  mapActions
} from 'vuex'

export const musicMixin = {
  computed: {
    ...mapGetters([
      'hotSearchVisible',
      'topHeight'
    ])
  },
  methods: {
    ...mapActions([
      'setHotSearchVisible',
      'setTopHeight'
    ]),
    setScrollWrapperHeight() {
      this.$refs.scroll.$el.style.height =
        window.innerHeight - this.topHeight + 'px'
    },
    imgAllLoad() {
      const mulitImg = document.getElementsByTagName('img')
      console.log(mulitImg)
      const promiseAll = []
      const imgTotal = mulitImg.length
      for (let i = 0; i < imgTotal; i++) {
        promiseAll[i] = new Promise((resolve, reject) => {
          mulitImg[i].onload = function () {
            // 第i张加载完成
            resolve(mulitImg[i])
          }
        })
      }
      return promiseAll
    },
  }
}
