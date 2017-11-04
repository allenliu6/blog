import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import mock from './mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
