// 引入Vue
import Vue from 'vue'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入配置好的routes
import routes from './routes.js'
// 声明使用路由
Vue.use(VueRouter)
// 暴露配置好的路由数组
export default new VueRouter({
  routes
})