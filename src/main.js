import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* ant-design-vue 插件引入 */
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; 
Vue.use(antd);
/* 视频播放插件的引入 */
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
