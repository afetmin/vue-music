const music = {
  state: {
    hotSearchVisible: false,
    topHeight: 0 // scroll组件起始位置
  },
  mutations: {
    'SET_HOTSEARCH_VISIBLE': (state, visible) => {
      state.hotSearchVisible = visible
    },
    'SET_TOP_HEIGHT': (state, height) => {
      state.topHeight = height
    },
  }
}

export default music
