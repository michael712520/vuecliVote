/* eslint-disable */
import api from '@/api'
import { async } from 'q'
export default {
  namespaced: true,
  state: {
    item: {},
    listData: [],
    refresh: false,
    refreshStandardList: false
  },
  actions: {
    ytyy: async ({ commit, state }, payload) => {
      let data = state.listData.map((d, index) => {
        var ds = JSON.parse(d.dataInfo.pageInfo)
        ds = {
          ...ds,
          ...{
            display: true,
            page: index + 1
          }
        }

        d.dataInfo.pageInfo = JSON.stringify(ds)

        return d.dataInfo
      })
      console.log('ytyy', data)
      let ListPicker = await api.tp.ListSaveItem(data)
      commit('refresh')
    },
    upListData: async ({ commit, state }, payload) => {
      let i = 1
      let data = state.listData.map((d, index) => {
        try {
          if (index == payload.index) {
            d.dataInfo = { ...d.dataInfo, ...payload.item }
          }
          var ds = JSON.parse(d.dataInfo.pageInfo)
          if (ds.display === true) {
            ds = {
              ...ds,
              ...{
                display: true,
                page: i
              }
            }
            i++
          } else {
            ds = {
              ...ds,
              ...{
                display: false,
                page: 0
              }
            }
          }
          d.dataInfo.pageInfo = JSON.stringify(ds)
          return d.dataInfo
        } catch (error) {
          console.log('error_upListData', error)
          return d.dataInfo
        }
      })

      debugger
      let ListPicker = await api.tp.ListSaveItem(data)
      commit('refresh')
    },
    qxytyy: async ({ commit, state }, payload) => {
      let data = state.listData.map(d => {
        var ds = JSON.parse(d.dataInfo.pageInfo)
        ds = {
          ...ds,
          ...{
            display: false
          }
        }

        d.dataInfo.pageInfo = JSON.stringify(ds)
        return d.dataInfo
      })

      let ListPicker = await api.tp.ListSaveItem(data)
      commit('refresh')
    },
    ListSaveItem: async ({ commit, state }, payload) => {
      let data = state.listData.map(d => {
        return d.dataInfo
      })
      let ListPicker = await api.tp.ListSaveItem(data)

      commit('refresh')
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
      state.listData.push({
        comp: payload,
        dataInfo: {}
      })
    },
    refresh: (state, payload) => {
      state.refresh = !state.refresh
    },
    refreshStandardList: (state, payload) => {
      state.refreshStandardList = !state.refreshStandardList
    }
  }
}
