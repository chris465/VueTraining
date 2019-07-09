import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "",
    lastName: ""
  },
  getters: {
    fullName(state: any): string {
      return `${state.firstName} ${state.lastName}`;
    }
  },
  mutations: {
    UPDATE_FIRST_NAME(state: any, value: string) {
      state.firstName = value;
    },
    UPDATE_LAST_NAME(state: any, value: string) {
      state.lastName = value;
    }
  },
  actions: {
    clearAll({ commit }: any) {
      commit("UPDATE_FIRST_NAME", "");
      commit("UPDATE_LAST_NAME", "");
    },
    async submit({ state }: any) {
      console.log(state);
    }
  }
});
