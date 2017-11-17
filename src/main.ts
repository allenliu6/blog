import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as axios from './services/index'
import {transTab, timeToNow} from './filter.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter('transTab', transTab)
Vue.filter('timeToNow', timeToNow)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
