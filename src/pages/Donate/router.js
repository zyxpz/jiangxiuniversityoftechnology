import Donate from './Index'; // 校友捐赠
import Foundation from './Foundation/Index'; // 教育基金会
import Project from './Project/Index'; // 基金会项目
import Knowledgements from './Knowledgements/Index'; // 捐赠鸣谢
import Method from './Method/Index'; // 捐赠方法
import News from './News/Index';
 // 捐赠新闻2
export default {
    path: '/donate',
        component: Donate,
            children: [
                {
                    path: 'foundation',
                    component: Foundation,
                },
                {
                    path: 'project',
                    component: Project,
                },
                {
                    path: 'knowledgements',
                    component: Knowledgements,
                },
                {
                    path: 'method',
                    component: Method,
                },
                {
                    path: 'news',
                    component: News,
                },
            ],

};
