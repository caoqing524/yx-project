 <template>
  <div class="recommend_box">
    <div class="recommend_content">
      <!-- 遍历推荐页 -->
      <div class="recommend_list" v-for="(item,index) in moreRecommendData" :key="index">
        <a :href="item.look.schemeUrl" class="u-flexbox">
          <div class="info">
            <div class="u-name">
              <span class="ava">
                <img :src="item.look.avatar" />
              </span>
              <span class="name">{{item.look.title}}:{{item.look.nickname}}</span>
            </div>
            <div class="title">{{item.look.content}}</div>
            <div class="desc">大闸蟹礼券限时8.8折</div>
            <div class="u-rcount">
              <i class="ico"></i>
              <span>{{item.look.readCount}}</span>
            </div>
          </div>
          <div class="u-pic" v-for="(itemImg,index) in item.look.lookPics" :key="index">
            <img :src="itemImg.picUrl" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

// <script>
// 引入vuex中的辅助函数
import { mapState } from "vuex";
// 引入滑动库

import BScroll from "better-scroll";
export default {
  data() {
    return {
      moreDataPage:1
    };
  },
  computed: {
    ...mapState({
      moreRecommendData: state => state.things.moreRecommendData
    })
  },

  async mounted() {

    this.$nextTick(() => {
      // 判断滑动是否有 如果没有 就创建new一个 如果有就刷新下
      if (this.scroll) {
        this.scroll.refresh();
      } else {
        // 解决滑动问题 不用再给滑动容器设置死的高度了 获取页面高度 获取滑动区域的高度 让页面的高度等于滑动区域的高度
        // 这样可滑动区域的最大可滑动高度即为页面高度了
        const height = document.documentElement.clientHeight - 100;
        const re_box = document.querySelector(".recommend_box");
        re_box.style.height = height + "px";

        this.scroll = new BScroll(".recommend_box", {
          click: true,
          scrollY: true,
          probeType: 3,
          //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）

          //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
          pullUpLoad: true
        });
        // 触发上拉加载
        this.scroll.on("pullingUp", async () => {
          // 每次上拉加载的时候让发请求的页数加加 自增
          this.moreDataPage++;
          // 发请求
          await this.$store.dispatch("getMoreRecommendData", {
            page: this.moreDataPage,
            size: 5
          });
          
          this.scroll.finishPullUp(); // 调用该方法 可以多次执行上拉加载
        });
      }
    });
    // 默认打开页面发请求展示的五条数据
    await this.$store.dispatch("getMoreRecommendData", { page: 1, size: 5 });
    // 当滑动区域的滑动高度 大于最大可滑动的translateY时 再发请求获取数据
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.recommend_box
  width 100%
  overflow hidden
  box-sizing border-box
  padding-top 30px
  font-size 28px
  background-color #fff
  .recommend_content
    width 100%
    .recommend_list
      display flex
      .u-flexbox
        .info
          .u-name
            .ava
              >img
                width 27px
                height 27px
          .title
            font-size 28px
        .u-pic
          width 345px
          height 188px
          >img
            width 100%
            height 100px
</style>
