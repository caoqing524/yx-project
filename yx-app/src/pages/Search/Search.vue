<template>
   <div class="search-wrap">
    <div class="search-header">
      <div class="search-img">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="搜索" />
      </div>
      <input type="text" ref="inp" v-model="searchText" placeholder="请输入搜索内容"/>
      <span @click="$router.back()">取消</span>
    </div>
    <span class="hot">热门搜索</span>
    <div class="search-list" >
      <ul v-show="searchText.length==0">
        <!-- 遍历li 默认显示 -->
        <li v-for="(item,index) in searchData" :key="index">{{item.keyword}}</li>
      </ul>
      <!-- 根据搜索关键字遍历显示li -->
      <ul>
        <!-- 上面输入什么内容 下面就会变化 计算属性 -->
        <li v-for="(keyword,index) in searchResult" :key="index" v-model="searchShow">{{keyword}}</li>
      </ul>
    </div>
   </div>
</template>

<script>
// 引入vuex的辅助函数
import { mapState } from "vuex";

// 引入api中发请求的接口
import { reqSearch, reqSearchResult } from "../../api/index.js";
export default {
  data() {
    return {
      searchText: "",
      timeId: 0,
      curIndex: 1,
      searchShow:''
    };
  },
  computed: {
    // 拿到vuex中state里的数据 上面遍历时才能用
    ...mapState({
      searchData: state => state.home.searchData,
      searchResult: state => state.home.searchResult
    }),
   // 监视搜索内容的变化 搜索要显示的结果放在计算属性里
  // searchShow(){
  //   // 防抖 搜索时等用户完整输入内容时再发请求 尽管触发事件 但一定在事件触发500秒后再执行
  //   clearTimeout(this.timerId);
  //      this.timeId = setTimeout( () => {
  //       // 发请求得到搜索结果
  //       this.$store.dispatch("getSearchResult", this.searchText)
  //      console.log(this.searchText);
  //      }, 300);
  //   // return  this.searchText
  // }
  
  },

watch: {
  // 监视实时变化的searchText
  searchText(val){
    this.$store.dispatch("getSearchResult", this.searchText)
    this.searchShow=this.searchText
    // this.$refs.inp.innerHTML=''
    // this.searchText=''
  }
},


  methods: {
    // toSearch() {
    //   // 防抖 搜索时等用户完整输入内容时再发请求 尽管触发事件 但一定在事件触发500秒后再执行
    //    clearTimeout(this.timerId);
    //    this.timeId = setTimeout( () => {
    //     // 发请求得到搜索结果
    //     console.log("触发了");
        
    //     this.$store.dispatch("getSearchResult", this.searchText);
    //   //  console.log(this.searchText);
    //    }, 300);
    // }
  },

   mounted() {
    // 等页面加载完毕 
    this.$store.dispatch("getSearchData");
    // console.log(this.searchData);
    // console.log(this.searchResult);
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
@import '../../common/stylus/mixins.styl'
.search-wrap
  width 100%
  height 100%
  .search-header
    width 650px
    height 60px
    display flex
    justify-content center
    align-items center
    position relative
    margin-left 30px
    margin-top 10px
    background-color #eee
    .search-img
      margin 0 20px 0 5px 
      width 35px
      height 35px
    >span 
      margin-left 20px
  .hot
    display block
    width 588px
    height 76px
    margin-top 30px
    margin-left 20px
  .search-list
    width 100%
    height 100%
    display flex
    flex-wrap wrap
    >li
      margin 10px 
    
</style>
