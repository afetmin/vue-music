const actions = {
  setHotSearchVisible({
    commit
  }, visible) {
    return commit('SET_HOTSEARCH_VISIBLE', visible)
  }
}
export default actions
