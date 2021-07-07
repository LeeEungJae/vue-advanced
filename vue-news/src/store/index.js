import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    userinfo: {},
    item: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
  modules: {},
});
