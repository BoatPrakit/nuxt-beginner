// import Vuex from 'vuex';
// export const store = new Vuex.Store({
//   state: {
//     name: 'demo',
//     subject: 'nuxtjs',
//     message: 'nothing',
//   },
//   mutations: {
//     changeMessage(state, payload) {
//       state.message = payload;
//     },
//   },
//   actions: {
//     assignMessage({ commit }, payload) {
//       commit('changeMessage', payload);
//     },
//   },
// });
export const state = () => ({
  name: 'demo',
  subject: 'nuxtjs',
  message: 'nothing',
});

export const mutations = {
  changeMessage(state, payload) {
    state.message = payload;
  },
};

export const actions = {
  assignMessage({ commit }, payload) {
    commit('changeMessage', payload);
  },
};
