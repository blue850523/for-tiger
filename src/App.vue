<template>
  <div id="app">
    <div id="window">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.getClientWidth();
    window.onresize = () => {
      this.getClientWidth();
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    getClientWidth () {
      let clientWidth = document.documentElement.clientWidth;
      this.$store.commit("SET_CLIENT_WIDTH", clientWidth);
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
@media only screen and (max-width: 768px) {
  #app {
    padding: 0;
  }
}
</style>
