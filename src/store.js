import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
        return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, payload) {
        state.user.loggedIn = payload;
    },
    SET_USER(state, payload) {
        state.user.data = payload;
    },
  },
  actions: {
    fetchUser(context, payload) {
        context.commit("SET_LOGGED_IN", payload !== null);
        if (payload) {
            context.commit("SET_USER", {
            displayName: payload.displayName,
            email: payload.email
            });
        } else {
            context.commit("SET_USER", null);
        }
    }
  }
});