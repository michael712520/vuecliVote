/* eslint-disable */
import Vue from 'vue'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import { userInfo } from '../data/userInfo'
import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
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
            router.addRoutes(asyncRouterMap)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve ,reject)=> {
        let response = { result: { ...state.yData, ...state.info } }
        const result = response.result
        console.log(result)
        debugger
        if (result.role && result.role.permissions.length > 0) {
          const role = result.role
          role.permissions = result.role.permissions
          role.permissions.map(per => {
            if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
              const action = per.actionEntitySet.map(action => {
                return action.action
              })
              per.actionList = action
            }
          })
          role.permissionList = role.permissions.map(permission => {
            return permission.permissionId
          })
          commit('SET_ROLES', result.role)
          commit('SET_INFO', { ...result, ...state.info })
        } else {
          reject(new Error('getInfo: roles must be a non-null array !'))
        }

        commit('SET_NAME', { name: result.name, welcome: welcome() })
        commit('SET_AVATAR', result.avatar)

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
