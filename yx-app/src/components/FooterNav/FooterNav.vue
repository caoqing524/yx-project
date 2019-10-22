<template>
  <footer id="footerContainer">
    <ul class="footerNav">
      <li class="item" @click="$router.push('/')">
        <i name="tabBar-index" class="u-icon u-icon-tabBar-index u-icon-tabBar-index-active"></i>
        <span class="text">首页</span>
      </li>
      <li class="item" @click="$router.push('/category')">
        <i name="tabBar-cate" class="u-icon u-icon-tabBar-cate"></i>
        <span class="text">分类</span>
      </li>
      <li class="item" @click="$router.push('/knowthings')">
        <i name="tabBar-topic" class="u-icon u-icon-tabBar-topic"></i>
        <span class="text">识物</span>
      </li>
      <li class="item" @click="$router.push('/shopcart')">
        <i name="tabBar-cart" class="u-icon u-icon-tabBar-cart"></i>
        <span class="text">购物车</span>
      </li>
      <li class="item" @click="$router.push('/personal')">
        <i name="tabBar-ucenter" class="u-icon u-icon-tabBar-ucenter"></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
// 引入混合
@import '../../common/stylus/mixins.styl'
// 底部导航的样式
body
  width 100%
  height 100%
  #footerContainer
    position fixed
    left 0
    bottom 0
    width 100%
    height 75px
    background-color $footerBgc
    border-top 1px solid $borderBgc
    display flex
    .footerNav
      width 100%
      height 98px
      display flex
      .item
        flex 1
        flex-direction column
        align-items center
        text-align center
        .u-icon
          display inline-block
          width 40px
          height 40px
          margin-bottom 15px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
          vertical-align middle
        .u-icon-tabBar-index
          background-position 0 -150px
        .u-icon-tabBar-index-active
          background-position 0 -200px
        .u-icon-tabBar-cate
          background-position 0 -150px 
        .u-icon-tabBar-topic
          background-position 0 -350px
        .u-icon-tabBar-cart
          background-position 0 -50px 
        .u-icon-tabBar-ucenter
          background-position 0 -450px
        .text
          display block
          text-align center
          font-size 24px
          margin-top -15px

          
</style>
