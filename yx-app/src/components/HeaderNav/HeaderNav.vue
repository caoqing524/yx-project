<template>
  <header class="headerContainer">
    <div class="header-search">
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
      />
      <div class="search-box" @click="$router.push('/search')">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"
        />
        <span class="placeholder">搜索商品，共28888件好物</span>
      </div>
      <div class="login" @click="$router.push('/personal')">登录</div>
    </div>
    <div class="header-nav">
      <div class="list-nav">
        <ul class="list-ul">
          <Li>
            <a class="active" href="javascript:;">推荐</a>
          </Li>
          <Li>
            <a href="javascript:;">家居生活</a>
          </Li>
          <Li>
            <a href="javascript:;">服饰鞋包</a>
          </Li>
          <Li>
            <a href="javascript:;">美食酒水</a>
          </Li>
          <span class="mask-span"></span>
          <li>
            <a href="javascript:;">个户清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">礼品特色</a>
          </li>
        </ul>
      </div>
      <!-- 小箭头 -->
      <div class="right-arrow">
        <img
          :class="{active:isOpen}"
          @click="isOpen=!isOpen"
          :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'"
        />
      </div>
      <div class="all-nav" v-show="isOpen">
        <p>全部频道</p>
        <ul class="all-nav-list">
          <Li>
            <a href="javascript:;">推荐</a>
          </Li>
           <li v-for="(item,index) in homeObj.categoryList" :key="index">
            <a href="javascript:;">{{item.categoryName}}</a>
          </li>
          <!-- <Li> 
            <a href="javascript:;">家居生活</a>
          </Li>
          <Li>
            <a href="javascript:;">服饰鞋包</a>
          </Li>
          <Li>
            <a href="javascript:;">美食酒水</a>
          </Li>
          <li>
            <a href="javascript:;">个户清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">礼品特色</a>
          </li> -->
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
// 引入滑动库
import BScroll from "better-scroll";
import {mapState} from 'vuex'
// 引入api中发请求的接口
import {reqMockHome} from '../../api/index.js'
export default {
  data() {
    return {
      isOpen: false, // 遮罩层默认不打开
      homeObj:{}
    };
  },
 computed: {
   ...mapState({
     homeData:state=>state.home.homeData
   })
 },

  // 滑动库
  async mounted() {
    // 触发actions中的getHomeData函数调用
      await this.$store.dispatch('getHomeData')
       // 更新homeObj
       this.homeObj=this.homeData.categoryHotSellModule
      
      this.$nextTick(() => {
      this.scroll = new BScroll(".list-nav", {
        click: true,
        scrollX: true,
        probeType: 3
      });
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
@import '../../common/stylus/mixins.styl'
.headerContainer
  width 100%
  position fixed
  left 0
  top 0
  z-index 3
  background-color #fff
  .header-search
    padding 16px 30px
    box-sizing border-box
    width 100%
    height 80px
    display flex
    align-items center
    >img
      display inline-block
      width 138px
      height 40px
      margin-right 8px
      background-size cover
    .search-box
      width 442px
      height 56px
      font-size 28px
      margin-right 8px
      display flex
      align-items center
      justify-content center
      border-radius 5px
      background-color #ededed
      >img
        display inline-block
        vertical-align middle
        width 28px
        height 28px
        margin-right 5px
    .login
      width 75px
      height 40px
      line-height 40px
      text-align center
      margin-right 8px
      font-size 24px
      border-radius 5px
      border 1px solid red
      color red
  .header-nav
    width 100%
    height 75px
    background-color #ffffff
    position relative
    .list-nav
      width 650px
      overflow hidden
      .list-ul
        width 1650px
        padding-right 60px
        display flex
        >li
          display flex
          align-items center
          justify-content center
          width 150px
          height 60px
          line-height 60px
          font-size 28px
          padding-right 0 17px
          color #333
        .mask-span
          width 60px
          height 60px
          background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
        .active
          color $themeColor
          border-bottom 3px solid $themeColor
    .right-arrow
      position absolute
      right 0px
      top 0px
      width 100px
      height 60px
      text-align center
      background-color #ffffff
      display flex
      justify-content center
      align-items center
      z-index 6
      >img
        display flex
        justify-content center
        align-items center
        width 28px
        height 28px
        transition transform 300ms linear
        &.active
          transform rotateZ(180deg)
    .all-nav
      position absolute
      left 0
      top 0
      width 100%
      background-color #fff
      >p
        height 60px
        width 500px
        padding-left 30px
        font-size 28px
        display flex
        align-items center
      .all-nav-list
        z-index 99
        display flex
        padding-left 15px
        /* 自动换行 */
        flex-wrap wrap
        /* 对齐主轴的起点 */
        justify-content flex-start
        >li
          width 165px
          margin 7px
          padding 0 16px
          box-sizing border-box
          font-size 28px
          line-height 60px
          color #333
          background-color #fafafa
          border 2px solid $borderBgc
          border-radius 6px
          display flex
          align-items center
          justify-content center
</style>


