const actions = {
  setHotSearchVisible({
    commit
  }, visible) {
    return commit('SET_HOTSEARCH_VISIBLE', visible)
  },
  setTopHeight({
    commit
  }, height) {
    return commit('SET_TOP_HEIGHT', height)
  },
}
export default actions
