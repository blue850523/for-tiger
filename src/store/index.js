import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientWidth: null,
    loading: false,
    loadingText: "Loading...",
    sleepMode: false
  },
  mutations: {
    SET_CLIENT_WIDTH (state, newValue) {
      state.clientWidth = newValue;
    },
    SET_LOADING (state, newValue) {
      state.loading = newValue;
    },
    SET_LOADING_TEXT (state, newValue) {
      state.loadingText = newValue;
    },
    SET_SLEEP_MODE (state, newValue) {
      state.sleepMode = newValue;
    }
  },
  actions: {
  },
  modules: {
  },
  // 嚴格模式，禁止直接修改state
  strict: true
})
