// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/basic-list',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/basic-list',
        component: RouteView,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/basic-list',
            name: 'question',
            component: () => import('@/views/tp/Clist/StandardList'),
            meta: { title: '问卷列表', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/LatitudeDetail',
            name: 'question',
            component: () => import('@/views/tp/LatitudeDetail/LatitudeDetail'),
            meta: { title: '纬度设置', keepAlive: false, permission: ['LatitudeDetail'] }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/basic-list',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/basic-list',
        component: RouteView,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/basic-list',
            name: 'question',
            component: () => import('@/views/tp/Clist/StandardList'),
            meta: { title: '问卷列表', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/Question',
            name: 'Question',
            component: () => import('@/views/tp/Quest/Question'),
            meta: { title: '设置', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/LatitudeDetail',
            name: 'question',
            component: () => import('@/views/tp/LatitudeDetail/LatitudeDetail'),
            meta: { title: '纬度设置', keepAlive: false, permission: ['LatitudeDetail'] }
          }
        ]
      }
    ]
  }
]
