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

exports.babel = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'lib',
        style: 'css',
      },
    ],
  ],
};
