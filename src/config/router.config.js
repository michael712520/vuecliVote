// eslint-disable-next-line
/* eslint-disable */
import {
  UserLayout,
  BasicLayout,
  RouteView,
  BlankLayout,
  PageView,
  PreviewLayout,
  BasicLayoutList
} from '@/layouts'
import {
  bxAnaalyse
} from '@/core/icons'

export const asyncRouterMap = []
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [{
        path: 'login',
        name: 'login',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [{
      path: 'home',
      name: 'TestHome',
      component: () => import('@/views/Home')
    }]
  },

  {
    path: '/404',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/',
    name: 'index',
    component: BasicLayoutList,
    meta: {
      title: '首页'
    },
    redirect: '/dashboard/basic-list',
    children: [{
        path: '/dashboard/basic-list',
        name: 'question',
        component: () => import('@/views/tp/Clist/StandardList')
      },
      {
        path: '/dashboard/latitudeDetail',
        name: 'latitudeDetail',
        component: () => import('@/views/tp/LatitudeDetail/LatitudeDetail')
      },
      {
        path: '/dashboard/LatitudeDetailTwo',
        name: 'LatitudeDetailTwo',
        component: () => import('@/views/tp/LatitudeDetail/LatitudeDetailTwo')
      }
    ]
  },
  {
    path: '/ExternalLinks/wj',
    name: 'ExternalLinks_wj',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/wj')
  },
  {
    path: '/ExternalLinks/studentList',
    name: 'ExternalLinks_studentList',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/studentList')
  },
  {
    path: '/ExternalLinks/studentAndMbQuestion',
    name: 'ExternalLinks_studentAndMbQuestion',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/studentAndMbQuestion')
  },
  {
    path: '/ExternalLinks/result',
    name: 'ExternalLinks_result',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/result')
  },
  {
    path: '/ExternalLinks/repeatwj',
    name: 'ExternalLinks_repeatwj',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/repeatwj')
  },
  {
    path: '/ExternalLinks/txwj',
    name: 'ExternalLinks_txwj',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/wj/txwj')
  },
  {
    path: '/wjitem/wjitem',
    name: 'wjitem_wjitem',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/wjitem/wjitem')
  },
  {
    path: '/ExternalLinks/studentListSimple',
    name: 'ExternalLinks_studentListSimple',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/ExternalLinks/studentListSimple')
  },
  {
    path: '/dashboard/Question',
    name: 'question',
    component: BasicLayout,
    children: [{
      path: '/dashboard/Question',
      name: 'question',
      component: () => import('@/views/tp/Quest/Question')
    }]
  },
  {
    path: '/preview',
    component: PreviewLayout,
    redirect: '/preview/index',
    children: [{
      path: '/preview/index',
      name: 'index',
      component: () => import('@/views/preview/index.vue')
    }]
  }
]