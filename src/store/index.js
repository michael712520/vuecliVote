import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import question from './modules/question'
import permission from './modules/permission'
import latitudeDetail from './modules/latitudeDetail'
import preview from './modules/preview'
import getters from './getters'
import ExternalLinks from './modules/ExternalLinks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    question,
    latitudeDetail,
    preview,
    ExternalLinks
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
