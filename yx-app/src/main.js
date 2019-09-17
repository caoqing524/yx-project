import Vue from 'vue'
import App from './App.vue'
// 引入动态计算rem值得库
import 'lib-flexible/flexible'
// 
// 引入配置好的路由
import router from './router/index.js'
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
  render:h=>h(App),
  // 注册路由器
  router,
}).$mount("#app")

