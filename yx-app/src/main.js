import Vue from 'vue'
import App from './App.vue'
// 引入动态计算rem值得库
import 'lib-flexible/flexible'
var px2rem = require('postcss-px2rem');
// 引入配置好的路由
import router from './router/index.js'
//引入mock文件
import './mock/mock-serve.js';

// 引入并声明使用图片懒加载
import VuelazyLoad from 'vue-lazyload'
Vue.use(VuelazyLoad)

// 引入Vuex的仓库对象
import store from './store/index.js';
Vue.config.productionTip = false


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//     // 注册App组件
//     App
//   },
//   template: '<App/>',
//   // 注册路由器对象
//   router,
// })

new Vue({
  el: '#app',
  render:h=>h(App),
  // 注册路由器
  router,
  // 注册仓库对象
  store
}).$mount("#app")

