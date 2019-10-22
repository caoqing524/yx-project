<template>
  <div>
    <header class="header">
      <span @click="$router.push('/home')" class="logo"></span>
      <slot name="title"></slot>
      <span class="search"></span>
      <span class="shopCar"></span>
    </header>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.header
  width 100%
  height 88px
  background-color #fff
  padding 0 16px 0 24px
  box-sizing border-box
  line-height 88px
  .logo
    width 48px
    height 75px
    display inline-block
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
    background-repeat no-repeat
    background-position 0 -55px
  .search
    width 75px
    height 75px
    display inline-block
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
    background-repeat no-repeat
    background-position 0 -346px
    position absolute
    top 0
    right 110px
  .shopCar
    width 75px
    height 75px
    display inline-block
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
    background-repeat no-repeat
    background-position 0 10px
    position absolute
    top 0
    right 20px
</style>
 