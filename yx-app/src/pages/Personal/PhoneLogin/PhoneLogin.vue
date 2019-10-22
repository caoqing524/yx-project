<template>
  <div class="phone_login_box">
    <div class="top_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease" />
    </div>

    <label class="input_phone">
      <div class="login_tips">
        <p>{{phone_tips}}</p>
        <p>{{code_tips}}</p>
      </div>
      <input type="text" placeholder="请输入手机号" v-model="user.phone" />
    </label>

    <label class="input_code">
      <input type="text" placeholder="请输入手机验证码" v-model="user.code" />
      <div
        class="get_phone_code"
        @click="getCode"
      >{{computedTime>0?`已发送(${computedTime})s`:'获取验证码'}}</div>
    </label>
    <div class="login_help">
      <span>遇到问题?</span>
      <span>使用密码验证登录</span>
    </div>
    <div class="login_btn active" @click="toLogin">登录</div>
    <div class="back_btn" @click="$router.replace('/personal')">其他登录方式</div>
    <div class="register_btn">注册账号 &gt;</div>
  </div>
</template>

<script>
// 引入axios
// import axios from 'axios';
// 引入发请求的接口
import {reqSendCode,reqSmsLogin} from '../../../api/index.js'
export default {
  name: "PhoneLogin",
  data() {
    return {
      curIndex: 3,
      // 用户输入的 手机号和验证码 初始为空
      computedTime: 0, //倒计时初始为0
      user: {
        phone: "",
        code: ""
      },
      phone_tips: "",
      code_tips: ""
    };
  },
  watch: {
    // watch监视里放的是 实时变化的 监视用户输入的phone和code
    uer: {
      deep: true,
      handler(newUser) {
        if (/^1[3-9]{9}$/.test(newUser.phone)) {
          // 如果用户输入的手机号正确 则提示信息为空 就不提示
          this.phone_tips = "";
        } else {
          // 否则提示
          this.phone_tips = "请输入正确的手机号码";
        }


        
        if (/^[0-9]{6}$/.test(newUser.code)) {
          this.code_tips = "";
        } else {
          this.code_tips = "请输入正确的验证码";
        }
      }
    }
  },

 async mounted() {
  
    //  if(result1.code===0){
    //  // 如果登录成功 获取用户信息
    //  this.user.code=result1.data
    //  console.log(this.user.code);
    //  }else{
    //    // 否则请求失败
    //    alert(result1.msg)
    //  }
   //  手机号验证码登陆的请求  POST  
    // const result2=await reqSmsLogin(this.user.phone,this.user.code)



  },

  methods: {
   // 点击获取验证码的方法
   async getCode(){
     let {phone} = this.user
  console.log(phone)
   // 获取手机验证码的请求
    const   result1=await reqSendCode(phone)
     this.computedTime=60
     this.timeId=setInterval(() => {
       this.computedTime--
       if(this.computedTime<0){
          this.computedTime=0
      // 清除定时器
      clearInterval(this.timeId)
       }
     }, 1000);
   },
    // 点击登录的方法
    async toLogin() {
     
      // 登录的不规范提示信息为空时 才发登录请求 
      if (this.phone_tips === "" && this.code_tips === ""&&this.user.phone!==''&&this.user.code!=='') {
         //  手机号验证码登陆的请求  POST  
    const result2=await reqSmsLogin(this.user.phone,this.user.code)
        console.log("登录成功");
      }
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.phone_login_box
  .top_logo
    width 100%
    height 133px
    margin 56px 0px 135px 0px
    line-height 133px
    text-align center
    img
      width 192px
      height 64px
      margin 0 auto
  .input_phone
    position relative
    .login_tips
      position absolute
      left 50%
      top -100%
      width 50%
      transform translateX(-50%)
      color $themeColor
      font-size 28px
  .input_phone, .input_code
    display block
    width 675px
    height 90px
    margin 30px auto
    input
      display block
      width 100%
      height 100%
      outline none
      border 0 none
      border-bottom 1px solid #bdbdbd
      font-size 30px
      line-height 45px
  .input_code
    position relative
    .get_phone_code
      position absolute
      right 0
      bottom 0
      width 173px
      height 56px
      line-height 56px
      text-align center
      font-size 28px
      border 1px solid #333
      border-radius 10px
  .login_help
    font-size 28px
    line-height 45px
    margin-bottom 90px
    display flex
    /* 富裕空间包含伸缩项目 */
    justify-content space-around
    /* justify-content space-between
    align-items center */
  .login_btn, .back_btn
    width 677px
    height 96px
    line-height 96px
    text-align center
    margin-top 50px
    color $themeColor
    font-size 28px
    display flex
    justify-content center
    margin 0 auto
    border 1px solid $themeColor
    &.active
      color #fff
      background-color $themeColor
  .register_btn
    margin-top 32px
    font-size 28px
    line-height 40px
    color #333
    text-align center
</style>
