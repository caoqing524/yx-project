<template>
<div class="homeContainer">
    <!-- Swiper轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./imgs/01.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/02.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/03.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/04.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/05.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/06.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/07.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/08.jpg" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
    data() {
        return {

        };
    },

    mounted() {
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      loop: true,
      paginationClickable: true,
      //   如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.homeContainer
  padding-top 150px
  .swiper-container
    width 100%
    height 367px
    z-index -1
    .swiper-slide
      
      img
        width 100%
        height auto
 
</style>
