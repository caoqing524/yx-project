// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
//引入4个对象
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js';

// 引入抽取的子模块 category模块和home放在一起了
import home from './modules/home/home.js';

import things from './modules/things/things.js'
// 声明使用Vuex
Vue.use(Vuex)
export default new Vuex.Store({
  // 总的state mutations actions getters对象
  state,
  mutations,
  actions,
  getters,
  // 引入抽取的modules模块 modules里可以存放多个模块
  modules:{
    // 总的state.模块的名字.对应的属性--->可以得到对应的属性值
    home:home, //home为模块名字 也可以省略同名变量写法
    things:things
  }
})