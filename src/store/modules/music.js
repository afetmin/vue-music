const music = {
  state: {
    hotSearchVisible: false
  },
  mutations: {
    'SET_HOTSEARCH_VISIBLE': (state, visible) => {
      state.hotSearchVisible = visible
    }
  }
}

export default music
