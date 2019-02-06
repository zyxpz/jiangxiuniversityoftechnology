exports.proxy = {
  dev: {
    targey: 'http://localhost',
  },
  test: {
    '/ow': {
      target: 'http://test.open.sosho.cn',
    },
  },
  pre: {
    '/ow': {
      target: 'http://open.sosho.cn',
    },
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
