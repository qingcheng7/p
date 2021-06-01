import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      num:1
  },
  mutations: {
      jia(state){
          state.num++
      },
      jian(state){
          state.num--
      }  
  },
  actions: {},
  modules: {},
});
