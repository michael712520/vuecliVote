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
        dataInfo: {}
      }
    ]
  },
  action: {},
  mutations: {
    listData: (state, payload) => {
      if (Array.isArray(state.listData)) {
        var listData = state.listData.map(element => {
          if (element.comp === payload.comp) {
            element.dataInfo = JSON.stringify(payload.dataInfo)
          }
          return element
        })
      }
      state.listData = listData
      console.log('state.listData', state.listData)
    }
  }
}
