<template>
  <div class="container">
    <!-- 使用插槽组件 -->
    <HeaderSlot>
      <div class="name" slot="title" v-if="$route.path==='/personal'">
         <span>网易严选</span>
       </div>
    </HeaderSlot>
    
    <div class="content"  v-if="$route.path==='/personal'" >
      <div class="logo"></div>
      <div class="btn">
        <mt-button type="danger" class="login QQ" @click="toPhoneLogin" v-if="$route.path==='/personal'">
          <i class="iconfont icon-shouji-tianchong"></i>手机号登录
        </mt-button>
        <mt-button type="danger" class="login phone"
         @click="$router.push('/personal/emaillogin')">
          <i class="iconfont icon-youxiang-copy"></i>邮箱登录
        </mt-button>
      </div>
      <div class="login-way">
        <div class="way">
          <i class="iconfont icon-qq "></i>
          <span>QQ</span>
        </div>
        <div class="way">
          <i class="iconfont icon-weixin1-copy"></i>
          <span>微信</span>
        </div>
        <div class="way">
          <i class="iconfont icon-weibo1-copy"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
  
</template>

<script>
// 引入插槽组件
import HeaderSlot from "../../components/HeaderSlot/HeaderSlot.vue";
// 引入mint-ui
import Vue from "vue";
import { Button } from "mint-ui";
//注册Button组件
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      // path:'/personal'
      
    }
  },
 


  // 注册组件
  components:{
    HeaderSlot
  },

  methods: {
    toPhoneLogin(){
      this.$router.push('/personal/phonelogin')
    }
  },



};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
// 引入混合
.container
  height: 100%
  width: 100%
  .name
    width: 176px
    height: 60px
    line-height 60px
    font-size 30px
    text-align center
    position: absolute
    left: 250px
    top: 0 
    margin-top: 20px
  .content
    width: 100%
    position: absolute
    top: 110px
    left: 0
    right: 0
    bottom: 0
    background-color: #F2F5F4
    .logo
      height: 30%
      width: 100%
      background-repeat: no-repeat
      background-position: center
      background-size: 267px 90px
      background-image: url('//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png')
    .btn
      width: 100%
      height: 50%
      text-align: center
      .login
        margin-top: 200px
        width: 670px
        height: 100px
        background-color: #DD1A21
        border: solid 2px #DD1A21
        font-size: 30px
        i
          font-size: 36px
          margin-right: 20px
      .phone
        background-color: transparent
        color: #DD1A21
        margin-top: 20px
    .login-way
      width: 100%
      height: 10%
      display: flex
      padding: 0 50px
      box-sizing: border-box
      .way
        width: 33%
        height: 100%
        text-align: center
        font-size: 28px
        color: #7f7f7f
        i
          margin-right: 20px
        .icon-youxiang-copy
          font-size: 30px
        .icon-weixin1-copy
          font-size: 40px
        .icon-weibo1-copy
          font-size: 40px
</style>



