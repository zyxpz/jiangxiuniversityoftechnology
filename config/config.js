exports.proxy = {
  dev: {
    targey: 'http://localhost',
  },
};


exports.webpack = {
  externals: {
    vue: 'Vue',
    VueRouter: 'vue-router',
	},
};
