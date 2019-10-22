<template>
<div>
      <HeaderNav/>
      <!-- 滑动区域 -->
  <div class="homeWrap">
  <div class="homeSlide">
      <!-- 使用引入的组件 -->
      
      <MySwiper />
      <ServiceInfo />
      <ProductNav />
      <!-- 此处插在中间 -->
      <div class="wy-staff">
        <a>
          <img src="https://yanxuan.nosdn.127.net/5aca6dfc27b5615a0b1107f2f85cbd6f.gif" />
        </a>
      </div>
    <SceneList/>
    <PersonalShop/>
    <div>
     <!-- <router-view></router-view> -->
    </div>
   </div>
  </div>
</div>
</template>

<script>
// 引入滑动库
import BScroll from "better-scroll";

// 引入头部导航
import HeaderNav from '../../components/HeaderNav/HeaderNav.vue';
// 引入轮播图组件
import MySwiper from "./HomeComs/MySwiper/MySwiper.vue";
// 引入服务信息组件
import ServiceInfo from "./HomeComs/ServiceInfo/ServiceInfo.vue";
// 引入商品导航的组件
import ProductNav from "./HomeComs/ProductNav/ProductNav.vue";
// 引入场景列表 SceneList组件
import SceneList from './HomeComs/SceneList/SceneList.vue';
// 引入私人定制组件
import PersonalShop from './HomeComs/PersonalShop/PersonalShop.vue';
export default {
  data() {
    return {};
  },
  // 注册组件
  components: {
    HeaderNav,
    MySwiper,
    ServiceInfo,
    ProductNav,
    SceneList,
    PersonalShop
  },
  
   mounted() {
   
  //     // 调用initScroll()
  //     // this._initScroll()
  //      new BScroll(".wrapper", {
  //       cilick: true,
  //       probeType: 3
  //     });

  // },
  // 方法
  // methods: {
  //   _initBScroll() {

  //   }
  // }
  // 为了上下滑动的时候 头部区域不被盖着 则减去头部的高度  让可滑动的最大高度减去头部高度
 const height=document.documentElement.clientHeight-156
 const homeWrapHeight=document.querySelector('.homeWrap')
  homeWrapHeight.style.height=height+'px'
this.$nextTick(() => {
      this.scroll = new BScroll(".homeWrap", {
        click: true,
        scrollY:true,
        probeType: 3
      });
    });


}

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.homeWrap
  padding-bottom 98px
  overflow-x hidden
  .wy-staff
    width 100%
    height 126px
    margin-top 40px
    background-color #fff
    >a
      width 100%
      height 126px
      >img
        display block
        width 100%
</style>
