<template>
  <div>
    <HeaderSlot>
      <div slot="title">
        <span class="nameToggle found" :class="{active:isShow}" @click="isShow=!isShow;$router.push('/knowthings/found')">发现</span>
        <span class="nameToggle  name" :class="{active:!isShow}" @click="isShow=false;$router.push('/knowthings/zhenxuan')">甄选家</span>
     
      </div>
    </HeaderSlot>
    <div class="thing-nav">
      <div class="ul-nav">
        <ul class="list-nav">
          <li class="active">推荐</li>
          <li>好货内部价</li>
          <li>选购指南</li>
          <li>推荐榜</li>
          <li>晒单</li>
          <li>开发者日记</li>
          <li>达人</li>
          <li>HOME</li>
        </ul>
      </div>
    </div>
    <!-- 使用组件 -->
    <!-- <Found/> -->
    
    <!-- 渲染组件的标签一般放在父级组件中 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入滑动库
import BScroll from "better-scroll";
//  引入发请求的接口
// import {reqAutoRecommendData} from '../../api/index.js';
// 引入推荐组件
// import Found from './Found/Found.vue'
// import ZhenXuan from './ZhenXuan/ZhenXuan.vue';
// 引入插槽组件
import HeaderSlot from "../../components/HeaderSlot/HeaderSlot.vue";
export default {
  data() {
    return {
      isShow:true
    };
  },
 
 

  // 注册组件
  components: {
    HeaderSlot,
    // Found,
    // ZhenXuan
  },
  // 滑动库
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(".ul-nav", {
        click: true,
        scrollX: true,
        probeType: 3
      });
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  @import "../../common/stylus/mixins.styl"
.found
  width 160px
  height 50px
  position absolute
  top 16px
  left 228px
  line-height 50px
  text-align center
  font-weight bold
  font-size 40px
.name
  position absolute
  top 16px
  left 350px
.nameToggle
  width 160px
  height 50px
  line-height 50px
  text-align center
  font-size 29px
  &.active
    font-size 39px
    color $themeColor
    border-bottom 6px solid $themeColor
.thing-nav
  border-top 1px solid black
  .ul-nav
    width 650px
    >ul
      display flex
      width 1650px
      justify-content center
      padding-right 60px
      box-sizing border-box
      >li
        display flex
        padding 0 20px
        align-items center
        justify-content center
        width 400px
        height 60px
        line-height 60px
        font-size 28px
        color #333
        &.active
          color $themeColor
          border-bottom 6px solid $themeColor
        
</style>
