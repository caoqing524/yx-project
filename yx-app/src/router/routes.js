// 引入要配置成路由的组件
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue'
import KnowThings from '../pages/KnowThings/KnowThings.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue';

// 暴漏配置好的路由
export default[
  {
    path:'/home',
    component: Home,
  },
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
    path:'/category',
    component: Category,
  },
  {
    path: '/knowthings',
    component: KnowThings,
  },
   {
     path: '/shopCart',
     component: ShopCart,
   },
   {
     path: '/personal',
     component: Personal,
   }
]