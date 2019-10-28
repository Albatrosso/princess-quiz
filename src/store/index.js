import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: {
      name: '',
      answer: '',
    },

  },
  mutations: {
    setQuestion: (state, payload) => {
      state.question.name = payload.name;
      state.question.answer = payload;
    },
  },
  actions: {
    setQuestion: (context, payload) => {
      context.commit('setQuestion', payload);
    },
  },
  modules: {
  },
});
