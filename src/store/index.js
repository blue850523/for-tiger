import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientWidth: null
  },
  mutations: {
    SET_CLIENT_WIDTH (state, newValue) {
      state.clientWidth = newValue;
    }
  },
  actions: {
  },
  modules: {
  },
  // 嚴格模式，禁止直接修改state
  strict: true
})
