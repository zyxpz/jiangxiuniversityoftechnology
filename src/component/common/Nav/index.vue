<template>
  <div class="nav">
    <a-menu
      v-model="current"
      mode="horizontal"
    >
      <a-menu-item v-for="item in menus" v-bind:key='item.key' v-if='!item.children'>
        {{ item.name }}
      </a-menu-item>
      <a-sub-menu v-for="item in menus" v-bind:key='item.key' v-if='item.children'>
        <span slot="title"><a-icon type="appstore" /><span>{{ item.name }}</span></span>
        <a-menu-item v-for="i in item.children" v-bind:key='i.key'>{{ i.name }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { Menu } from 'ant-design-vue';

export default {
  name: 'Nav',
  props: {},
  data() {
    return {
      current: ['home'],
      menus: [
        {
          name: '首页',
          key: 'home',
        },
        {
          name: '部门简介',
          key: 'department-intro',
          children: [
            {
              name: '部门介绍',
              key: 'introduce',
            },
            {
              name: '工作职责',
              key: 'job-duties',
            },
            {
              name: '工作人员',
              key: 'staff',
            },
          ],
        },
        {
          name: '新闻动态',
          key: 'news',
          children: [
            {
              name: '通知公告',
              key: 'notice',
            },
            {
              name: '校友会志',
              key: 'magazine',
            },
          ],
        },
        {
          name: '校友会',
          key: 'association',
          children: [
            {
              name: '校友总会',
              key: 'merger',
            },
            {
              name: '校友分会',
              key: 'branch',
            },
          ],
        },
        {
          name: '校友活动',
          key: 'activites',
        },
        {
          name: '校友捐赠',
          key: 'donate',
          children: [
            {
              name: '教育基金会',
              key: 'foundation',
            },
            {
              name: '基金会项目',
              key: 'project',
            },
            {
              name: '捐赠鸣谢',
              key: 'knowledgements',
            },
            {
              name: '捐赠方法',
              key: 'method',
            },
            {
              name: '捐赠新闻',
              key: 'donate-news',
            },
          ],
        },
        {
          name: '校友文苑',
          key: 'fumizono',
        },
        {
          name: '校园记忆',
          key: 'memory',
          children: [
            {
              name: '图说农大',
              key: 'foundation',
            },
            {
              name: '时光荏苒',
              key: 'project',
            },
            {
              name: '年华似锦',
              key: 'knowledgements',
            },
            {
              name: '清清同窗情',
              key: 'method',
            },
          ],
        },
        {
          name: '校园历史',
          key: 'history',
        },
        {
          name: '校园服务',
          key: 'service',
        },
      ],
    };
  },
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
  },
  computed: {},
  methods: {
    // goto() {
    //   this.$router.push('/activities');
    // },
  },
};
</script>
<style lang="less">
  .nav {
    .ant-menu {
      // color: #00923F;
    }
    .ant-menu-item-selected {
      color: #00923F !important;
      border-bottom: 2px solid #00923F !important;
    }
    .ant-menu-item-active {
      color: #00923F !important;
      border-bottom: 2px solid #00923F !important;
    }
    .ant-menu-submenu-selected {
      color: #00923F !important;
      border-bottom: 2px solid #00923F !important;
      // .ant-menu-submenu-title {
      //   color: #00923F !important;
      // }
    }
    .ant-menu-submenu-active {
      color: #00923F !important;
      border-bottom: 2px solid #00923F !important;
      // .ant-menu-submenu-title {
      //   color: #00923F !important;
      // }
    }
    .ant-menu-submenu:hover {
      color: #00923F !important;
      border-bottom: 2px solid #00923F !important;
    }
   .ant-menu-item:hover, 
   .ant-menu-item-active, 
   .ant-menu:not(.ant-menu-inline) 
   .ant-menu-submenu-open, .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
     color: #00923F !important;
      // border-bottom: 2px solid #00923F !important;
    }
  }
</style>
