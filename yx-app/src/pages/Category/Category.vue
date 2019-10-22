<template>
  <div class="cate-container">
    <!-- cate头部 -->
    <div class="cate-header">
      <div class="search-box">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"
        />
        <span class="placeholder">搜索商品，共28888件好物</span>
      </div>
    </div>
    <!-- cate内容区 -->
    <div class="cate-content">
      <!-- cate左侧列表内容 -->
      <div class="left-nav">
        <ul>
          <!-- 遍历左侧列表内容  并绑定点击事件-->
          <li
            v-for="(item,index) in categoryData"
            :key="index"
            @click="toNext(index)"
            :class="{active:currentobj===item}"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- cate右侧内容 -->
      <div class="right-content">
        <!-- 右侧轮播图 -->
        <div class="banner-box">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(imgItem,index) in categoryData" :key="index">
                <!-- 图片懒加载  安装 引入 声明使用 在main.js -->
                <img v-lazy="imgItem.wapBannerUrl" :src="imgItem.wapBannerUrl" />
              </div>
              <div class="swiper-slide"></div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <ul class="right-list">
          <!-- 遍历右边每个Li 点击左边的让右边的跟着变化 左右联动  -->
          <li v-for="(item,index) in currentobj.subCateList" :key="index">
            <img v-lazy="item.bannerUrl" :src="item.bannerUrl" />
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入滑动库
import BScroll from "better-scroll";
// 引入api中发请求的接口
import { reqMockCategory, reqMockCategoryList } from "../../api/index";
// 引入vuex的辅助函数
import { mapState } from "vuex";
// 引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      currentIndex: 0,
      currentobj: {}
    };
  },
  computed: {
    ...mapState({
      categoryData: state => state.home.categoryData
      // categoryListData:state=>state.home.categoryListData
    })
  },

  methods: {
    // 点击li的事件
    toNext(index) {   
      // 更新currentIndex的值 根据左侧点击的index的值 更新右侧列表的currentIndex
      this.currentIndex = index;
      // 根据左侧点击的index的值更新右侧列表的显示
      this.currentobj = this.categoryData[index];
    }
  },
  async mounted() {
    // 轮播图
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      loop: true,
      paginationClickable: true,
      //   如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });

// 左侧滑动
  this.$nextTick(() => {
      this.scroll = new BScroll(".left-nav", {
        click: true,
        scrollY:true,
        probeType: 3
      });
    });
 
    // mock模拟数据 发请求
    await this.$store.dispatch("getMockCategory");
    // this.$store.dispatch('getMockCategoryList')
    this.currentobj = this.categoryData[0];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
@import '../../common/stylus/mixins.styl'
.cate-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100%
  height 88px
  border-bottom 1px solid #eee
  background-color #fff
  display flex
  align-items center
  justify-content center
  .search-box
    width 675px
    height 56px
    border-radius 8px
    background-color #ededed
    display flex
    align-items center
    justify-content center
    >div
      display flex
      align-items center
      >img
        width 28px
        height 28px
        margin-right 10px
      >span
        font-size 28px
.cate-content
  width 100%
  position relative
  .left-nav
    width 162px
    height 1220px
    font-size 28px
    position fixed
    top 100px
    left 0
    >ul
      height 1600px
      >li
        width 162px
        height 50px
        line-height 50px
        text-align center
        font-size 28px
        color #7e8c8d
        margin-top 35px
        &.active
          color $themeColor
          border-left 6px solid $themeColor
  .right-content
    width 530px
    position absolute
    right 20px
    top 100px
    .banner-box
      width 100%
      height 2.56rem
      margin-bottom 30px
      background center no-repeat #eee
      background-size cover
      border-radius 4px
      .swiper-slide
        width 528px
        height 230px
    .right-list
      display flex
      flex-wrap wrap
      >li
        width 144px
        height 216px
        margin-right 32px
        >img
          width 144px
          height 144px
        >span
          width 144px
          height 72px
</style>
