<template>
  <header class="jx-header-wrap">
    <img
      src="http://www.jxau.edu.cn/_upload/tpl/02/4e/590/template590/images/1.jpg"
      width="355"
      height="80"
    >
    <div class="header-search">
      <a-button icon="search" v-on:click="goto()">点击搜索</a-button>
    </div>
  </header>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  name: 'Header',
  props: {},
  components: {
    AButton: Button,
  },
  computed: {},
  methods: {
    goto() {
      this.$router.push('/activities');
    },
  },
};
</script>
<style lang="less">
@import "~mido-less-general/lib/mixins/mixins.less";
.jx-header-wrap {
  .display-box;
  .box-pack(space-between);
  position: relative;
  .header-search {
    position: absolute;
    bottom: 0; right: 0;
  }
}
</style>
