<template>
  <div class="wrap">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../component/common/Header/index';
import Footer from '../../component/common/Footer/index';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
  methods: {},
};
</script>

<style lang="less">
  .wrap {
    width: 1010px;
    margin: 0 auto
  }
</style>
