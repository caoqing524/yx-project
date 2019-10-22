<template>
    <!-- 商品导航列表 -->
    <ul class="product-nav">
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" />
          <p>新品首发</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" />
          <p>居家生活</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" />
          <p>服饰鞋包</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" />
          <p>美食酒水</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
          <p>个护清洁</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" />
          <p>母婴亲子</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" />
          <p>运动旅行</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" />
          <p>数码家电</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" />
          <p>全球特色</p>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <img class="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" />
          <p>好货抄底</p>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
  .product-nav
    width 100%
    height 340px
    display flex
    flex-wrap wrap
    >li
      display flex
      align-items center
      justify-content center
      margin 20px
      >a
        display block
        width 110px
        height 155px
        >img
          width 110px
          height 110px
          p
            width 110px
            height 36px
 
</style>
