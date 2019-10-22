// 引入要配置成路由的组件
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue'
import KnowThings from '../pages/KnowThings/KnowThings.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue';
import Search from '../pages/Search/Search.vue';
import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin.vue';
import EmailLogin from '../pages/Personal/EmailLogin/EmailLogin.vue';
import Found from '../pages/KnowThings/Found/Found.vue';
import ZhenXuan from '../pages/KnowThings/ZhenXuan/ZhenXuan.vue'
import LoginSuccess from '../pages/LoginSuccess/LoginSuccess.vue'
// 暴漏配置好的路由
export default[
  {
    path:'/home',
    component: Home,
    meta: {
      showFooter: true

    }
  },
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
  path:'/search',
  component: Search,

  },
  {
    path:'/category',
    component: Category,
    meta: {
      showFooter: true

    }
  },
  {
    path: '/knowthings',
    component: KnowThings,
    children:[
      {// 发现子路由
        path: '/knowthings/found',
        component: Found,
         meta: {
           showFooter: true
         }
      },
     {// 甄选子路由
      path: '/knowthings/zhenxuan',
      component:ZhenXuan,
     },

    //  识物页面重定向到发现页
      {
        path: '/knowthings',
        redirect: '/knowthings/found'
      },
    
    ],
    
    meta: {
      showFooter: true

    }
  },
   {
     path: '/shopcart',
     component: ShopCart,
     meta: {
       showFooter: true

     }
   },
   {
     path: '/personal',
     component: Personal,
    children:[
      {
       path:'/personal/phonelogin',
       component:PhoneLogin,
      },
      {
        path: '/personal/emaillogin',
        component: EmailLogin,
      }
    ]
    },

    // 登录成功的路由
     {
       path:'/loginsuccess',
       component:LoginSuccess,
     }



  
]