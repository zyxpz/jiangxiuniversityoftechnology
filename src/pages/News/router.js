import News from './Index'; // 新闻动态
import Notice from './Notice/Index'; // 通知公告
import Magazine from './Magazine/Index'; // 校友会志

export default {
  path: '/news',
  component: News,
  children: [
    {
      path: 'notice',
      component: Notice,
    },
    {
      path: 'magazine',
      component: Magazine,
    },
  ],
};
