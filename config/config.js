exports.proxy = {
  dev: {
    targey: 'http://localhost',
  },
};


exports.webpack = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
  },
};
