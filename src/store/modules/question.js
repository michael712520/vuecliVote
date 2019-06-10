/* eslint-disable */
import api from '@/store/modules/@/api'
export default {
  namespaced: true,
  state: {
    item: {},
    listData: [],
    refresh: false
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
    updateListData: (state, payload) => {
      let list = []
      payload.forEach(element => {
        if (element) {
          let arr = []
          arr.comp = element.type
          arr.dataInfo = element
          list.push(arr)
        }
      })
      state.listData = list
    },
    listData: (state, payload) => {
      if (Array.isArray(state.listData)) {
        var listData = state.listData.map(element => {
          if (element.comp === payload.comp) {
            element.dataInfo = payload.dataInfo
          }
          return element
        })
      }
      state.listData = listData
    },
    item: (state, payload) => {
      state.item = payload
    },
    addListData(state, payload) {
      state.listData.push({ comp: payload, dataInfo: {} })
    },
    refresh: (state, payload) => {
      state.refresh = !state.refresh
    }
  }
}
