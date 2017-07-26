import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    mainColor: '#fb8c00',
    fontColor: 'black',
    bgColor: '#bbb',
    lastRoute: {},
    lastRouteName: ''
  },

  mutations: {
    set_is_loading (state, payload) {
      state.isLoading = payload
    },

    set_font_color (state, payload) {
      state.fontColor = payload
    },

    set_bg_color (state, payload) {
      state.bgColor = payload
    },

    set_main_color (state, payload) {
      state.mainColor = payload
    },

    set_last_route (state, payload) {
      state.lastRoute = payload
      state.lastRouteName = payload.name
    }
  },

  strict: process.env.NODE_ENV !== 'production'
})
