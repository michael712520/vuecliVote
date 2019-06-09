import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import question from './modules/question'
import permission from './modules/permission'
import LatitudeDetail from './modules/LatitudeDetail'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    question,
    LatitudeDetail
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
