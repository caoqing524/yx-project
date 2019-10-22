<template>
  <div class="shopcart_container">
    <div class="cart_header">
      <div class="cart_title">
        <span>购物车</span>
      </div>
      <div class="tips">
        <span>领券</span>
      </div>
    </div>
    <div class="cart_content">
      <div class="service">
        <span>30天无忧退货</span>
        <span>48小时无忧退款</span>
        <span>满88元免邮费</span>
      </div>

      <div class="login">
        <img
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"
        />
        <p>去添加点什么吧</p>
        <button @click="$router.push('/personal')">登录</button>
      </div>
    </div>
    <div>
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {};
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.shopcart_container
  width 100%
  padding-top 88px
  font-size 28px
  background-color #f4f4f4
  .cart_header
    width 100%
    height 88px
    background-color #fff
    position fixed
    top 0
    left 0
    .cart_title    
      width 100%
      height 100%
      font-size 36px
      display flex
      margin 20px 0 0 20px
    .tips
      position absolute
      right 60px
      top 10px
      transform translateY(50%)
      font-size 30px
      color $themeColor
  .cart_content
    width 100%
    padding-top 30px
    .service
      font-size 24px
      color #666
      display flex
      align-items center
      justify-content space-around
    .login
      text-align center
      >img
        display block
        width 248px
        height 248px
        margin 375px auto 0
      >p
        color #999
      >button
        width 480px
        height 92px
        margin 50px auto 288px
        font-size 30px
        color #fff
        background-color $themeColor
</style>
