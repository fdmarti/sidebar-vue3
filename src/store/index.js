import { createStore } from "vuex";
const store = createStore({
  state() {
    false;
  },

  mutations: {
    changeSideBar(state, payload) {
      state.sideBarCollapsed = !state.sideBarCollapsed;
    },
  },

  actions: {},

  getters: {
    sideBarCollapsed(state) {
      return state.sideBarCollapsed;
    },
  },
});
export default store;
