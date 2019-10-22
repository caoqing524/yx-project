<template>
  <div class="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <a
          class="swiper-slide swiper-slide-duplicate"
          href="https://m.you.163.com/expert/event?id=20000172&amp;_stat_referer=expert_index&amp;_stat_area=banner_1"
          title="隐形眼镜清洗仪"
        >
          <div class="imgbox">
            <img
              class="swiper-lazy swiper-lazy-loaded"
              src="https://yanxuan.nosdn.127.net/cbd1f75b06ad2d740956e4e46a721b57.jpg?imageView&amp;quality=75&amp;thumbnail=670x371"
            />
          </div>
        </a>
      </div>

      <div class="swiper-wrapper">
        <a
          class="swiper-slide swiper-slide-active"
          href="https://you.163.com/expert/report?id=20000412&amp;_stat_referer=expert_index&amp;_stat_area=banner_2"
          title="泰国制造天然乳胶枕豪华礼盒报告"
        >
          <div class="imgbox">
            <img
              class="swiper-lazy"
              src="https://yanxuan.nosdn.127.net/ac5bdd0277eed0e2cb5a52e270381f8a.jpg?imageView&amp;quality=75&amp;thumbnail=670x371"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="swiper-pagination common-swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {};
  },
  mounted() {
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
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.wrap
  height 100%
  width 100%
  
    
    
</style>
