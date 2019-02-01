import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Index';
import DepartmentIntroRouter from '../pages/DepartmentIntro/router';
import NewsRouter from '../pages/News/router';
import AssociationRouter from '../pages/Association/router';


Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/', redirect: '/home' },
  DepartmentIntroRouter,
  NewsRouter,
  AssociationRouter,
];

const router = new VueRouter({
  routes,
});

export default router;
