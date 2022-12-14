import Vue from 'vue'
import Vuex from 'vuex'
import { getimglistapi } from "@/api/admin.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imglist: {}
  },
  getters: {
  },
  mutations: {
    GETIMGLIST(state, res) {
      state.imglist = res
    }
  },
  actions: {
    async getimglist(context) {
      let { data: res } = await getimglistapi()
      context.commit("GETIMGLIST", res.data)
    }
  },
  modules: {
  }
})
