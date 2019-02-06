<template>
  <footer class="jx-footer-wrap">
    <span class="footer-links">友情链接</span>
    <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack">Jack</a-select-option>
    </a-select>
  </footer>
</template>

<script>
import { Select } from 'ant-design-vue';

export default {
  name: 'Fouter',
  props: {},
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
  },
  computed: {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
<style lang="less">
@import "~mido-less-general/lib/mixins/mixins.less";
.jx-footer-wrap {

}
</style>
