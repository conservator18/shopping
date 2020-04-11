import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addCartData(state,obj){
      // console.log(obj);
      state.cart = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
