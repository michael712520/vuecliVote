export default {
  namespaced: true,
  state: {
    listData: [
      {
        comp: 'comTitle',
        dataInfo: {}
      },
      {
        comp: 'danxuan',
        dataInfo: []
      }
    ]
  },
  action: {},
  mutations: {
    listData: (state, payload) => {
      if (Array.isArray(state.listData)) {
        var listData = state.listData.map(element => {
          if (element.comp === payload.comp) {
            element.dataInfo = payload.dataInfo
          }
          return element
        })
      }
      console.log('vuexlistData', listData)
      state.listData = listData
    }
  }
}
