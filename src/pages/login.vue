<template>
<div class="fullscreen">
  <div class="login-box">
    <div style="text-align: center;">
      <img src="../assets/user.jpg" alt="" class="logo" style="border-radius:50%;width:80px;height:80px">
    </div>
    <p class="text-tips">你好，欢迎登录影视管家后台</p>
    <form action="" class="login-form">
      <div class="m-list-group">
        <div class="m-list-group-item">
          <input type="text" placeholder="请输入账号" class="m-input" v-model="username">
        </div>
        <div class="m-list-group-item">
          <input type="password" placeholder="请输入密码" class="m-input" v-model="password">
        </div>
         <div class="m-list-group-item">
          <input type="num" placeholder="请输入验证码" class="m-input yzm" v-model="yzm">
          <div class="yzmCon">
            <a href="#" @click="editCaptcha">
              <img src="/api/getCaptcha" alt="" ref="imgYzm">
            </a>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
      <p class="text-tips">本系统仅限管理员登录,不支持用户登录注册</p>
      <button class="m-btn sub select-none" @click.prevent.stop="handleLogin" v-loading="isLoging">登录</button>
    </form>
    <div style="margin-top: 50px"></div>
    <p class="text-tips">
      <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp;
      <span class="footer-text">{{appName}} &nbsp;<br>©make by <a href="https://www.github.com/liyushilezhi" target="_blank">{{author}}</a>
  </span>
    </p>
  </div>
</div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      username: '帅气的管理员',
      password: '',
      yzm:'',
      isLoging: false,
      author: window.APP_INFO.author,
      version: window.APP_INFO.version,
      appName: window.APP_INFO.appName,
    }
  },
  watch:{
    'login':{
      handler:function(val){
        // console.log(val);
        if(val == 1){
          this.isLoging = true
          this.$message.success('登录成功')
          this.$router.push({name: 'home'})
          this.isLoging = false
          return
        }else{
          this.isLoging = true
          this.$message.success('用户名或者密码错误')
          this.isLoging = false
          return
        }
      },
      deep:true
    }
  },
  computed:{
    ...mapGetters(['login'])
  },
  mounted(){
  },
  methods: {
    editCaptcha () {
      this.$refs.imgYzm.src = '/api/getCaptcha?d='+Math.random()
    },
    handleLogin () {
      if (!this.username || !this.password) {
        return this.$message.warning('用户名和密码不能为空')
      }
      let captcha = document.cookie.split('=')[1]
      if(this.yzm != captcha){
        return this.$message.warning('验证码错误')
      }
      this.$store.dispatch('login2',{
        username: this.username,
        password: this.password
      }).then(res => {
        // this.isLoging = true
        // this.$message.success('登录成功')
        // this.$router.push({name: 'home'})
        // this.isLoging = false
      })
    }
  }
}
</script>
<style type="text/css">
  .clear{
    clear: both;
  }
  .m-list-group{
    border-radius: 3px;
    padding: 0;
    margin: 0 0 20px;
  }
  .m-list-group .m-list-group-item{
    position: relative;
    display: block;
    padding: 6px 10px;
    margin-bottom: 5px;
    background-color: #fff;
    border: 1px solid #e7ecee;
  }
  .m-list-group .m-list-group-item:first-child{
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .m-list-group .m-list-group-item:last-child{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .fullscreen{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(http://oo9xy1zeh.bkt.clouddn.com/wallhaven-644753.png);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-box{
    position: relative;
    width: 330px;
    margin: 0 auto;
    padding: 0px 15px;
  }
  .login-box .logo{
    max-width: 40%;
    margin-bottom: 30px;
  }
  .login-box .text-tips{
    text-align: center;
    color: rgb(184, 167, 167);
  }
  .login-box .m-input{
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  .login-box .yzm{
    width: 70%;
    float: left;
  }
  .login-box .yzmCon{
    width: 30%;
    background: rgb(224, 206, 206);
    color: #fff;
    float: left;
    text-align: center;
  }
  .login-box .m-btn{
    font-size: 18px;
    width: 100%;
    color: #fff;
    background-color: #36c1fa;
    display: inline-block;
    padding: 10px 12px;
    margin-bottom: 5px;
    line-height: 1.42857143;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    border: 1px solid #36c1fa;
    box-sizing: border-box;
    text-decoration: none;
  }
  .login-box .m-btn.m-btn-text{
    background: #fff;
    color: #36C1FA;
  }
  .login-box .m-btn:hover{
    background-color: #2DB7F5;
  }
  .login-box .m-btn.m-btn-text:hover{
    background-color: #F4F5F5;
  }
  .login-box .m-btn:active{
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    .login-box{
      width: auto;
    }
  }
</style>
