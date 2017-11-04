import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import mock from './mock'
import {transTab} from './filter'

Vue.config.productionTip = false

Vue.filter('transTab', transTab)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
