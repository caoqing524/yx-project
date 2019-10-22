<template>
  <div class="scene-container">
    <ul class="scene-list">
      <li>
        <p class="title">9.9超值专区</p>
        <p class="desc">190款商品定价直降</p>
        <div>
          <img
            src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
        </div>
      </li>
      <li>
        <p class="title">50元内好物</p>
        <p class="desc">买到生活小确幸</p>
        <div>
          <img
            src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
        </div>
      </li>
      <li>
        <p class="title">断货补单王</p>
        <p class="desc">严选必买爆款</p>
        <div>
          <img
            src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
        </div>
      </li>
      <li>
        <p class="title">家装换季</p>
        <p class="desc">夏去秋来床品家具都翻新</p>
        <div>
          <img
            src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
          <img
            src="https://yanxuan-item.nosdn.127.net/a5b76d65fa4f9cecba601f954306a34b.png?imageView&amp;thumbnail=150x150&amp;quality=75"
          />
        </div>
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
.scene-list
  display flex
  flex-wrap wrap
  justify-content center
  height 560px
  li
    position relative
    width 343px
    height 260px
    box-sizing border-box
    margin 4px 0 0 4px
    padding 20px 0 0 20px
    border-radius 4px
    background-color #F5F5F5
    .title
      padding-left 10px
      box-sizing border-box
      color #333
      font-size 32px
    .desc
      margin-top 10px
      margin-bottom 10px
      padding-left 10px
      box-sizing border-box
      color #7f7f7f
      font-size 24px
    >div
      display flex
      justify-content center
      img
        width 150px
        height 150px
        margin-right 4px
</style>
