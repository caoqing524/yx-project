<template>
  <div class="app">
    <!-- 使用组件 -->

    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
// 引入api中发请求的接口
import {
  reqMockHome,
  reqMockCategory,
  reqMockCategoryList,
  reqSearch,
  reqSearchResult
} from "./api/index.js";
// 引入底部导航
import FooterNav from "./components/FooterNav/FooterNav.vue";
export default {
  name:'App',
  data() {
    return {};
  },
  // 注册组件
  components: {
    FooterNav
  },

  // 页面加载完毕 测试一下 mock拦截数据是否成功
  async mounted() {
    // this.$store.dispatch('getHomeData')
    // const result1=await reqMockHome()
    // console.log(result1);
    // const result2=await reqMockCategory()
    // console.log(result2)
    // const result3=await reqMockCategoryList()
    // console.log(result3);
    // 测试搜索接口
    //     this.$store.dispatch('getSearchData')
    //    this.$store.dispatch('getSearchResult')
    // const result=await reqSearchResult('1')
    // console.log(result);

    // this.$store.dispatch('getMoreRecommendData',{page:1,size:5})
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

</style>
