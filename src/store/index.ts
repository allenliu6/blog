import Vuex from 'vuex'
// import mutations from './mutation'
// import * as actions from './action'
// import * as getters from './getter'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
	
}

const store = new Vuex.Store({
	state,
	// getters,
	// mutations,
	// actions,
	strict:true,
})

export default store