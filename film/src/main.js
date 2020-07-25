import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import '@/assets/style/reset.css'
import 'lib-flexible'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'animate.css'


// import Video from 'video.js'
// import 'video.js/dist/video-js.css'
// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: '7e608486d50dafce9f08b3c77be872ff',
    // 插件集合
    plugin: ['']
});
// Vue.prototype.$video = Video

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log(process.env)