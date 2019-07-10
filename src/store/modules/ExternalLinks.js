/* eslint-disable */
import api from '@/api'
export default {
  namespaced: true,
  state: {
    listData: [],
    refresh: false,
    qtDetail: null
  },
  actions: {
    UpdateQtDetailItem: async ({ commit, state }, payload) => {
      let params = []
      state.listData.forEach(d => {
        params.push({
          id: d.id,
          selectResult: d.selectResult
        })
      })
      let data = await api.qtDetail.UpdateQtDetailItem(params)
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
    updateSelectResult: (state, payload) => {
      state.listData[payload.index].dataInfo.selectResult = JSON.stringify(payload.SelectResult)
    },
    qtDetail: (state, payload) => {
      state.qtDetail = payload
    }
  }
}
