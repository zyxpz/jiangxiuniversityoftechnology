import DepartmentIntro from './Index'; // 部门简介
import Introduce from './Introduce/Index'; // 部门介绍
import JobDuties from './JobDuties/Index'; // 工作职责
import Staff from './Staff/Index'; // 工作人员

export default {
    path: '/department-intro',
        component: DepartmentIntro,
            children: [
                {
                    path: 'introduce',
                    component: Introduce,
                },
                {
                    path: 'job-duties',
                    component: JobDuties,
                },
                {
                    path: 'staff',
                    component: Staff,
                },
            ],

};
