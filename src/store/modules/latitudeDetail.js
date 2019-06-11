/* eslint-disable */
import api from '@/api'
export default {
  namespaced: true,
  state: {
    refresh: false,
    ListPicker: []
  },
  actions: {
    getPicker: async ({ commit, state }, payload) => {
      let ListPicker = await api.latitudeDetail.GetPicker()
      commit('getPicker', ListPicker)
    }
  },
  mutations: {
    refresh: (state, payload) => {
      state.refresh = !state.refresh
    },
    getPicker: (state, payload) => {
      state.ListPicker = payload
    }
  }
}