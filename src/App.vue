<template>
  <div id="app">
    <router-view/>
    <loading
      :show="$store.state.loading"
      :text="$store.state.loadingText"
      :sleepMode="$store.state.sleepMode"
    />
  </div>
</template>

<script>
import loading from '@/components/Loading/Loading.vue';
export default {
  components: {
    loading
  },
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

<style lang="scss">
#app {
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #7dc8e1;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #7dc8e133;
}
}
</style>
