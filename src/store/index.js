import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home:{
      news: true,
      projects: true,
      skills: true
    },
    store: {
      category : 1
    },
    basket:{
      content : []
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
