<template>
  <el-button v-bind="$attrs" @click="handleClick" :loading="loading">
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  name: 'loading-button',
  props: {
    click: Function
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      Promise.resolve()
        .then(() => this.click && this.click())
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>