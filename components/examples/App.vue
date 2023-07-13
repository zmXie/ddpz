<template>
  <div id="app">
    <loading-button :click="submit">提交</loading-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    submit() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
