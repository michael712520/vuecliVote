/* eslint-disable */
import api from '@/api'
export default {
  namespaced: true,
  state: { listData: [], refresh: false },
  actions: {},
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
    }
  }
}
