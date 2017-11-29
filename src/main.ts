import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as axios from './services/index'
import { transTab, timeToNow, formatDate } from './filter.js'
import './class-component-hooks.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter('transTab', transTab)
Vue.filter('timeToNow', timeToNow)
Vue.filter('formatDate', formatDate)

Vue.directive('visib', {
	inserted(elem){
		elem.style.visibility = 'hidden'
	},
	update(elem, binding, Vnode, oldVnode,) {
		const visibility = binding.value === true ? 'visible' : 'hidden'
		elem.style.visibility = visibility
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
