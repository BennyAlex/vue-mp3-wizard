import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    dialogOpen: false,
    darkMode: false
  },

  mutations: {
    set_is_loading (state, payload) {
      state.isLoading = payload
    },

    set_dialog_open (state, payload) {
      state.dialogOpen = payload
    },

    set_dark_mode (state, payload) {
      state.darkMode = payload
    }
  },

  strict: process.env.NODE_ENV !== 'production'
})
