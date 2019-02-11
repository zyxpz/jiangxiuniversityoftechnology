const initState = {
  links: [],
};

const getters = {};

const actions = {
  getData({ commit, state }) {
    commit('setState', state);
  },
};

const mutations = {
  setState(state, staus) {
    const newState = state;
    newState.links = staus;
  },
};


export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
