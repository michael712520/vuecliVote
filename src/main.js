/* eslint-disable */
// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { VueAxios } from './utils/request'

// mock
import './mock'
import bootstrap from './core/bootstrap'
import './core/use'
import './permission' // permission control
import './utils/filter' // global filter
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'
Vue.config.productionTip = false
Vue.use(VueKindEditor)
// mount axios Vue.$http and this.$http
Vue.use(VueAxios)

import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/radar'
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  created() {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
