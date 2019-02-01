import Memory from './Index'; // 校园记忆
import Picture from './Picture/Index'; // 图说农大
import TimeFlies from './TimeFlies/Index'; // 时光荏苒
import TimeFuture from './TimeFuture/Index'; // 年华似锦
import Schoolmate from './Schoolmate/Index'; // 清清同窗情
// 捐赠新闻2
export default {
  path: '/memory',
  component: Memory,
  children: [
    {
      path: 'picture',
      component: Picture,
    },
    {
      path: 'time-flies',
      component: TimeFlies,
    },
    {
      path: 'time-future',
      component: TimeFuture,
    },
    {
      path: 'schoolmate',
      component: Schoolmate,
    },
  ],

};
