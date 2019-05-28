/* eslint-disable */
import Vue from 'vue'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import { userInfo } from '../data/userInfo'
import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
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
    SET_NAME: (state, { name, welcome }) => {
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
    Login({ commit, router }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            Vue.ls.set(ACCESS_TOKEN, response.id, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', response.id)
            commit('SET_NAME', { name: response.username, welcome: welcome() })
            commit('SET_ROLES', {})
            commit('SET_INFO', response)
            commit('SET_ROUTERS', asyncRouterMap)
            Cookies.set('SET_TOKEN', response.id)
            Cookies.set('SET_NAME', { name: response.username, welcome: welcome() })
            Cookies.set('SET_ROLES', {})
            Cookies.set('SET_TOKEN', response)
            Cookies.set('SET_TOKEN', asyncRouterMap)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        resolve(response)
      })
    },

    // 登出
    Logout({ commit, state }) {
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
