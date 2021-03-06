/* eslint-disable */
import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import {
  setDocumentTitle,
  domTitle
} from '@/utils/domUtil'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = [
  'login',
  'register',
  'registerResult',
  'ExternalLinks_wj',
  'ExternalLinks_studentList',
  'ExternalLinks_studentAndMbQuestion',
  'ExternalLinks_result',
  'ExternalLinks_repeatwj',
  'ExternalLinks_studentListSimple',
  'ExternalLinks_txwj',
  'wjitem_wjitem'
] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar

  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))

  store
    .dispatch('GetInfo', {
      router: router
    })
    .then(res => {
      if (store.getters.userInfo && store.getters.userInfo.username && Vue.ls.get(ACCESS_TOKEN)) {
        if (to.path === '/user/login') {
          next({
            path: '/dashboard/basic-list'
          })
          NProgress.done()
        } else {
          next()
          // NProgress.done()
        }
      } else {
        if (whiteList.includes(to.name)) {
          // 在免登录白名单，直接进入
          next()
        } else {
          next({
            path: '/user/login',
            query: {
              redirect: to.fullPath
            }
          })
          NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
      }
    })
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})