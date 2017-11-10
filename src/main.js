import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import {transTab, timeToNow} from './filter'

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
