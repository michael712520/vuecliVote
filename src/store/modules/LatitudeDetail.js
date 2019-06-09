/* eslint-disable */
export default {
  namespaced: true,
  state: {
    refresh: false
  },
  action: {},
  mutations: {
    refresh: (state, payload) => {
      state.refresh = !state.refresh
    }
  }
}
