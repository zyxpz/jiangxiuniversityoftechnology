import Vue from 'vue';
import router from '../router/router';
import App from './app';
import store from '../store/index';

const root = document.getElementById('root');

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount(root);

Vue.config.devtools = true;
