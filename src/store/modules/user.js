/* eslint-disable */
import Vue from 'vue'
import {
  login,
  getInfo,
  logout
} from '@/api/login'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'
import {
  welcome
} from '@/utils/util'
import {
  userInfo
} from '../data/userInfo'
import {
  asyncRouterMap,
  constantRouterMap
} from '@/config/router.config'
import Cookies from 'js-cookie'
const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
    yData: userInfo
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, {
      name,
      welcome
    }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    async Login({
      commit,
      state
    }, userInfo) {
      let response = await login(userInfo)
      if (response === '') {
        return false
      }
      let {
        model,
        token
      } = response
      Cookies.set('access_token', token.access_token)
      Vue.ls.set(ACCESS_TOKEN, token.access_token, 7 * 24 * 60 * 60 * 1000)
      console.log('state.yData.role', state.yData.role)

      commit('SET_TOKEN', token.access_token)
      commit('SET_NAME', {
        name: model.username,
        welcome: welcome()
      })
      commit('SET_ROLES', state.yData.role)
      commit('SET_INFO', model)
      Cookies.set('SET_TOKEN', token.access_token)
      Cookies.set('SET_NAME', {
        name: model.username,
        welcome: welcome()
      })
      Cookies.set('SET_ROLES', asyncRouterMap)
      Cookies.set('SET_INFO', model)
      Cookies.set('access_token', token.access_token)
      return true
    },

    // 获取用户信息
    async GetInfo({
      commit,
      state
    }, {
      router
    }) {
      try {
        console.log('state.yData.role11', state.yData.role)
        let SET_TOKEN = Cookies.get('SET_TOKEN')
        let SET_NAME = Cookies.get('SET_NAME')
        let SET_ROLES = Cookies.get('SET_ROLES')
        let SET_INFO = Cookies.get('SET_INFO')
        if (SET_TOKEN) {
          commit('SET_TOKEN', SET_TOKEN)
          commit('SET_NAME', JSON.parse(SET_NAME))
          commit('SET_ROLES', asyncRouterMap)
          commit('SET_INFO', JSON.parse(SET_INFO))
          console.log('JSON.parse(SET_INFO)', JSON.parse(SET_INFO))
        } else {}
        return {
          userInfo: JSON.parse(SET_INFO)
        }
      } catch (error) {
        return {
          userInfo: {}
        }
      }
      return {
        userInfo: {}
      }
    },

    // 登出
    Logout({
      commit,
      state
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    }
  }
}

export default user