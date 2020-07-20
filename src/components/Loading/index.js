import myLoading from './Loading.vue';

export default {
  install(Vue, options) {
    const Loading = Vue.extend(myLoading);
    const Profile = new Loading({
      el: document.createElement('div')
    });
  }
}