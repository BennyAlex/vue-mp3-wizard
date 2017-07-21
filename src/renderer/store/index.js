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
    set_is_loading (state) {
      state.isLoading = true
    },

    set_is_not_loading (state) {
      state.isLoading = false
    },

    set_dialog_open (state) {
      state.dialogOpen = true
    },

    set_dialog_not_open (state) {
      state.dialogOpen = false
    },

    set_dark_mode (state, payload) {
      state.darkMode = payload
    }
  },

  strict: process.env.NODE_ENV !== 'production'
})
