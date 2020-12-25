import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* ant-design-vue 插件引入 */
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(antd);
/* 视频播放插件的引入 */
import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
Vue.use(VideoPlayer);

Vue.config.productionTip = false;


import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer)

// 这里是插件的默认设置
Viewer.setDefaults({
　zIndexInline: 9999
})
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
    inline: false,
    button: true,
    navbar: false,
    title: false,
    toolbar: true,
    tooltip: false,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: false,
    transition: true,
    fullscreen: false,
    keyboard: false
  }
})




new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
