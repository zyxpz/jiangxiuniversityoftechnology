<template>
  <footer class="jx-footer-wrap">
    <span class="footer-links">友情链接:</span>
    <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <a-icon slot="suffixIcon" type="caret-up" theme="filled"/>
      <a-select-option
        v-for="item in links"
        :key="item.id"
        :value="item.redirect_url"
      >{{item.title}}</a-select-option>
    </a-select>
  </footer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Select, Icon } from 'ant-design-vue';
import fetch from '../../../util/fetch';

export default {
  name: 'Fouter',
  props: {},
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
    AIcon: Icon,
  },
  computed: {
    ...mapState('footer', {
      links: state => state.links,
    }),
    ...mapActions('footer', ['getData']),
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
      window.location.href = value;
    },
  },
  created() {
    fetch({
      url: '/ow/ow/contents',
      data: {
        com_id: 617,
      },
    })
      .then((d = {}) => {
        console.log(d);
        const { data = {} } = d;
        const { items = [] } = data;
        console.log(items);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style lang="less">
@import "~mido-less-general/lib/mixins/mixins.less";
.jx-footer-wrap {
  .footer-links {
    font-size: 14px;
    color: #00923f;
  }
}
</style>
