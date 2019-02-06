import fetch from '../../util/fetch';

const initState = {
  links: [],
};

const getters = {};

const actions = {
  getData({ commit }) {
    fetch({
      url: '/ow/ow/contents',
      data: {
        com_id: 617,
      },
    })
      .then((d = {}) => {
        console.log(d);
        const {
          data = {},
        } = d;
        const {
          items = [],
        } = data;
        commit('setState', items);
      })
      .catch((e) => {
        console.log(e);
        commit('setState', e);
      });
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
