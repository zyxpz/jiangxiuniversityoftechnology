import Vue from 'vue';
import VueRouter from 'vue-router';

import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

Vue.use(VueRouter);

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/', redirect: '/page1' },

];
const router = new VueRouter({
  routes,
});

export default router;
