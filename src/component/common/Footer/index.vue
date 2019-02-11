<template>
  <div>
    <footer class="jx-footer-wrap">
      <div>
        <span class="footer-links">友情链接:</span>
        <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
          <a-icon slot="suffixIcon" type="caret-up" theme="filled"/>
          <a-select-option
            v-for="item in links"
            :key="item.id"
            :value="item.redirect_url"
          >{{item.title}}</a-select-option>
        </a-select>
      </div>
      <div class='footer-box'>
        <div class='footer-box1'>
          <div class='footer-circle'></div>
          <div class="text-content">
            <div class='footer-title'>联系邮箱</div>
            <div class='footer-text'>0791 - 83838380</div>
          </div>
        </div>
        <div class='line' />
        <div class='footer-box2'>
          <div class='footer-circle'></div>
          <div class="text-content">
            <div class='footer-title'>联系地址</div>
            <div class='footer-text'>江西省南昌市经济技术开发区江西农业大学</div>
          </div>
        </div>
      </div>
    </footer>
  <div class="footer-des">
    Copyright ©  2018 江西农业大学校友办 All Rights Reserved  技术支持: USHO  
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Select, Icon } from 'ant-design-vue';

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
    this.getData;
  },
};
</script>
<style lang="less">
@import "~mido-less-general/lib/mixins/mixins.less";
.jx-footer-wrap {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  .footer-links {
    font-size: 14px;
    color: #00923f;
  }
  .footer-box {
    display: flex;

  }
  .footer-box1 {
    display: flex;
    width: 144px;
  }
  .footer-box2 {
    display: flex;
    width: 282px;
  }
  .footer-circle {
    border: #00923f solid 1px;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
  .text-content {
    // display: flex;
    padding-left: 10px;
  }
  .footer-title {
    font-size: 14px;
    color: #00923f;
  }
  .footer-text {
    font-size: 12px;
    color: #00923f;
  }
  .line {
    opacity: 0.5;
    transform: rotate(1deg);
    width: 1px;
    background: #2BCD71;
    margin: 0 40px;
  }
}
    .footer-des {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #00923F;
      text-align: center;
    }
</style>
