import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Index';
import DepartmentIntroRouter from '../pages/DepartmentIntro/router';
import NewsRouter from '../pages/News/router';
import AssociationRouter from '../pages/Association/router';
import ActivitiesRouter from '../pages/Activities/router';
import DonateRouter from '../pages/Donate/router';
import FumizonoRouter from '../pages/Fumizono/router';
import MemoryRouter from '../pages/Memory/router';
import HistoryRouter from '../pages/History/router';
import ServiceRouter from '../pages/Service/router';


Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/', redirect: '/home' },
  DepartmentIntroRouter,
  NewsRouter,
  AssociationRouter,
  ActivitiesRouter,
  DonateRouter,
  FumizonoRouter,
  MemoryRouter,
  HistoryRouter,
  ServiceRouter,
  
];

const router = new VueRouter({
  routes,
});

export default router;
