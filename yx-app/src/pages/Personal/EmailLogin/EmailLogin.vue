<template>
  <div class="email_login_box">
    <div class="top_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease" />
    </div>

    <label class="input_email">
      <div class="login_tips">
        <p>{{email_tips}}</p>
        <p>{{password_tips}}</p>
      </div>
      <input type="text" placeholder="请输入邮箱" v-model="user.email" />
    </label>

    <label class="input_code">
      <input type="text" placeholder="请输入密码" v-model="user.password" />
    </label>
    <div class="get_captcha">
      <input class="input"/>
      <span class="spanB" @click=""sendCaptcha>获取图形验证码</span>
    </div>
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
import {reqPwdLogin,reqCaptcha} from '../../../api/index';
export default {
  name: "EmailLogin",
  data() {
    return {
      curIndex: 3,
      user: {
        email: "",
        password: ""
      },
      email_tips: "",
      password_tips: ""
    };
  },
  watch: {
    user: {
      deep: true,
      handler(newUser, oldUser) {
        if (
          /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(newUser.email)
        ) {
          this.email_tips = "";
        } else {
          this.email_tips = "请输入正确的邮箱";
        }
        if (/^[a-zA-Z0-9_]{6,20}$/.test(newUser.password)) {
          this.password_tips = "";
        } else {
          this.password_tips = "请输入正确的密码";
        }
      }
    }
  },
 async mounted() {
  //  随机生成图形验证码的请求
  //  const result1=await reqCaptcha()
  //  携带 用户名 密码 图形登录的请求
    // const result2=await reqPwdLogin(this.user.email,this.user.password)
  },
  methods: {
    async sendCaptcha(){
   //  随机生成图形验证码的请求
   const result1=await reqCaptcha()
   console.log(result1);
    },
   async toLogin() {
      
  //  携带 用户名 密码 图形登录的请求
    const result2=await reqPwdLogin(this.user.email,this.user.password)
      if (this.email_tips === "" && this.password_tips === "") {
        console.log("登录成功");
      }
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.email_login_box
  background-color #fff
  .top_logo
    width 100%
    height 133px
    margin 56px 0 135px 0
    line-height 133px
    text-align center
    img
      width 192px
      height 64px
      margin 0 auto
  .input_email
    position relative
    .login_tips
      position absolute
      left 50%
      top -100%
      width 50%
      transform translateX(-50%)
      color $themeColor
      font-size 28px
  .input_email, .input_code
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
  .get_captcha
    width 750px
    height 70px
    background-color #eee
    display flex
    justify-content space-around
    >input
      display block
      height 70px
      width 200px
      background-color pink
    .spanB
      display block
      height 70px
      width 200px
      line-height 70px
      text-align center
    .get_password
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
    margin-bottom 64px
    display flex
    justify-content space-around
    
  .login_btn, .back_btn
    width 677px
    height 96px
    line-height 96px
    text-align center
    margin 0 auto
    color $themeColor
    font-size 28px
    display flex
    justify-content center
    align-items center
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
