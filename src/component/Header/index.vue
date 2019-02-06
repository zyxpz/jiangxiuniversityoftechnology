<template>
  <a-button type="danger">Danger</a-button>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  name: 'Header',
  props: {
    type: String,
  },
  components: { AButton: Button },
  computed: {},
  methods: {},
};
</script>
<style lang="less">
</style>
