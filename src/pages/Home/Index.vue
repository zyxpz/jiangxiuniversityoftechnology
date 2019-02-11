<template>
  <div class="wrap">
    <Header/>
    <div>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../component/Header/index';
import Footer from '../../component/Footer/index';

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
