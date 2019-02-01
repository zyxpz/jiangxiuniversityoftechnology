import Association from './Index'; // 校友会
import Branch from './Branch/Index'; // 校友分会
import Merge from './Merge/Index'; // 校友总会

export default {
    path: '/association',
    component: Association,
            children: [
                {
                    path: 'branch',
                    component: Branch,
                },
                {
                    path: 'merge',
                    component: Merge,
                },
            ],

};
