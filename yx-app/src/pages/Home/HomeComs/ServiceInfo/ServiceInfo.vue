<template>
  <!-- 服务展示 -->
  <div class="serviceInfo">
    <ul>
      <li class="item-info">
        <a href="javascript:">
          <i class="iconfont icon-wy"></i>
          <span>网易自营品牌</span>
        </a>
      </li>
      <li class="item-info">
        <a href="javascript:">
          <i class="iconfont icon-duihao"></i>
          <span>30天无忧退货</span>
        </a>
      </li>
      <li class="item-info">
        <a href="javascript:">
          <i class="iconfont icon-money"></i>
          <span>48小时快速退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
@import '../../../../common/stylus/mixins.styl'
.serviceInfo
  background-color #FFFFFF
  color $themeColor
  // padding-top 150px
  ul
    box-sizing border-box
    width 100%
    height 72px
    padding 0 30px
    display flex
    justify-content center
    .item-info
      width 228px
      height 36px
      display flex
      flex-direction column
      justify-content center
      align-items center
      >a
        display flex
        justify-content center
        align-items center
        .iconfont
          background-repeat no-repeat
          background-size 100% 100%
          margin-right 0px 15px
        .icon-wy
          width 32px
          height 32px
          background-image url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
        .icon-duihao
          width 32px
          height 32px
          background-image url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png') // yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
        .icon-money
          width 32px
          height 32px
          background-image url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png') // yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
        .text
          font-size 24px
          margin-left 15px
          line-height 32px
          height 32px
          vertical-align middle
          color #333
</style>
