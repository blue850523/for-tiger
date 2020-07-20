<template>
  <transition name="loadingFade">
    <div v-show="show" id="loading" @click="cancelLoading()">
      <div class="center">
        <span class="svg-container svg-cat">
          <svg-icon icon-class="cat" />
        </span>
        <span class="text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loading",
  props: {
    // 是否顯示loading
    show: {
      type: Boolean,
      default: false
    },
    // loading上面的顯示文字
    text: {
      type: String,
      default: ''
    },
    sleepMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      TimeOutEvent: null
    }
  },
  created () {
  },
  beforeDestroy () {
    clearTimeout(this.TimeOutEvent);
  },
  methods: {
    cancelLoading () {
      if (this.sleepMode) {
        this.$store.commit("SET_LOADING", false);
        this.$store.commit("SET_SLEEP_MODE", false);
        this.TimeOutEvent = setTimeout(() => {
          this.$store.commit("SET_LOADING_TEXT", "Loading...");
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#loading {
  z-index: 99999;
  position: fixed;
  background: #ffffffe6;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
  -webkit-user-select:none;
  -moz-user-select:none;
  -o-user-select:none;
  user-select:none;
  .center {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    margin-top: -50px;
    color: #7dc8e1;
    .svg-container {
      font-size: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -140%);
      animation: iconAnimation 1.5s infinite;
    }
    .text {
      font-size: 28px;
      display: inline-block;
      animation: textAnimation 1.5s infinite;
    }
  }
}
.loadingFade-enter {
  opacity: 0;
}
.loadingFade-enter-active,
.loadingFade-leave-active {
  transition: all .5s;
}
.loadingFade-leave-to {
  opacity: 0;
}
@keyframes iconAnimation {
  0% {
    font-size: 50px;
    transform: translate(-50%, -140%) rotateY(0deg);
  }
  50% {
    font-size: 34px;
  }
  100% {
    font-size: 50px;
    transform: translate(-50%, -140%) rotateY(360deg);
  }
}
@keyframes textAnimation {
  0% {
    color: #7dc8e1;
  }
  50% {
    color: transparent;
  }
  100% {
    color: #7dc8e1;
  }
}
</style>
