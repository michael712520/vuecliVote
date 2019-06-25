/* eslint-disable */
import api from '@/api'
export default {
  namespaced: true,
  state: {
    refresh: false,
    ItemRefresh: false,
    ListPicker: []
  },
  actions: {
    getPicker: async ({ commit, state }, payload) => {
      let ListPicker = await api.latitudeDetailItem.GetPicker({ id: payload })
      if (ListPicker && ListPicker.length > 0) {
        commit('getPicker', ListPicker)
      } else {
        commit('getPicker', [])
      }
    }
  },
  mutations: {
    refresh: (state, payload) => {
      state.refresh = !state.refresh
    },
    ItemRefresh: (state, payload) => {
      state.ItemRefresh = !state.ItemRefresh
    },
    getPicker: (state, payload) => {
      state.ListPicker = payload
    }
  }
}
