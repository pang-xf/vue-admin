<template>
<m-navbar :theme="theme.theme.headerTheme">
  <m-navbar-brand>
    <i class="side-switch"
      :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }"
      @click="handleSwitchSide"
      ></i>
  </m-navbar-brand>
  <m-nav>
    <m-nav-item><a href="https://github.com/liyushilezhi" target="_blank">主页</a></m-nav-item>
    <m-nav-item><a href="https://github.com/liyushilezhi" target="_blank">关于</a></m-nav-item>
  </m-nav>
  <m-nav align="right">
    <m-nav-item padding="0">
      <m-dropdown align="right" v-if="user" padding="0 10px">
        <a href="#" style="display: inline-block; padding: 0px; color: inherit">
          <img src="../assets/user.jpg" alt="" style="border-radius: 50%;vertical-align: middle;width:35px;height:35px;margin-right:5px;">
          <span>{{user.username}}</span> 
          <span class="caret"></span>
        </a>
        <m-dropdown-panel>
          <m-dropdown-item>
            <router-link to="/setting">用户信息</router-link>
          </m-dropdown-item>
          <m-dropdown-item >
            <router-link to="/editPwd">修改密码</router-link>
          </m-dropdown-item>
          <m-dropdown-item >
            <router-link to="/" disabled>回到追剧管家</router-link>
          </m-dropdown-item>
          <div class="test-line"></div>
          <m-dropdown-item>
            <div @click="logoutAdmin()">退出账号</div>
          </m-dropdown-item>
        </m-dropdown-panel>
      </m-dropdown>
    </m-nav-item>
    <m-nav-item padding="0 5px">
      <a href="#" @click.stop.prevent="handleSwitchScreen">
        <i 
          class="fa" 
          :class="isFullScreen ? 'fa-compress' : 'fa-expand'"
          ></i>
      </a>
    </m-nav-item>

    <m-nav-item padding="0">
      <m-dropdown align="right" padding="0 10px">
        <a href="#"  style="padding:0 0px; color: inherit">
          <i class="fa fa-gears"></i>
        </a>
        <m-dropdown-panel style="width: 200px; min-height: 100px;">
          <el-form>
            <el-form-item label="侧边栏">
              <el-switch v-model="showAside" @change="handleSwitchHideSide" />
            </el-form-item>
            <el-form-item label="主题">
              <el-select v-model="themeType" style="width: 100px">
                <el-option
                  v-for="theme in themes"
                  :key="theme.label"
                  :label="theme.label"
                  :value="theme.name"
                  ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </m-dropdown-panel>
      </m-dropdown>
    </m-nav-item>
  </m-nav>
</m-navbar>
</template>
<script type="text/javascript">
import {mapActions, mapGetters} from 'vuex'
import {
  requestFullScreen,
  exitFullscreen
} from '@/utils'
import themes from './theme'
export default {
  name: 'app-header',
  data () {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: {theme: {headerTheme: 'info'}}
    }
  },
  computed: {
    ...mapGetters({
      user: 'Loginadmin'
    })
  },
  watch: {
    themeType (val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginAdmin', 'logout']),
    logoutAdmin(){
      console.log('222');
      this.$router.go('login')
      this.logout()
    },
    handleSwitchSide () {
      this.mini = !this.mini  
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      console.log('change')
      this.$emit('hide-side')
    }
  },
  created () {
    this.getLoginAdmin()
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
  }
}
</script>
<style type="text/css">
  .side-switch{
    display: inline-block;
    font-size: 32px;
    cursor: pointer;
    color: inherit;
    margin-top: 10px;
  }
  .side-switch:hover{
    color: #fff;
  }
</style>
