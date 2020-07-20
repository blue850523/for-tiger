import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./style/NewElementUI.scss";
import "./style/NewViwerCSS.scss";
import axios from 'axios';
import api from '@/apis/APIConfig.js'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// import Loading from '@/components/Loading/index.js'

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false
Vue.use(ElementUI);

// 圖片加載插件
Vue.use(Viewer, {
  defaultOptions: {
    toolbar: {
      zoomIn: 1,
      zoomOut: 1,
      prev: 1,
      play: {
        show: 0.6,
        size: 'large'
      },
      next: 1,
      reset: 1,
      rotateRight: 1
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
