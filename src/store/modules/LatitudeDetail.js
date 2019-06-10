/* eslint-disable */
import api from '@/api'
export default {
  namespaced: true,
  state: {
    refresh: false,
    ListPicker: []
  },
  action: {
    getPicker: ({ commit, state }, payload) => {
      debugger
      let ListPicker = api.LatitudeDetail.GetPicker().then(d => {
        commit('getPicker', ListPicker)
      })
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
