<template>
<div class="body">
    <div class="page-body">
      <div class="page-header">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{path: '/'}">主页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="box">
        <div class="intro">
          <p class="title">影视资源管理系统后台</p> 
          <p>当前总用户数: {{getMemNum.length}} </p>
          <p>当前总影片数: {{movieNum}}</p>
          <p>欢迎帅气的管理员大大</p>
          <p>今天也要元气满满哦....</p>
        </div>
    </div>
</div>
</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      user: [
        {
          name: '是李宇呀丶',
          sex: '男',
          age:'23',
          email: '335136854@qq.com',
          intro: '全都是泡沫~~~~'
        }
      ],
      msg:[
        {
          members:'199',
          todayAct:'30',
          yesterDayReg:'20',
          todpMsg:[
            {
              things:'今天也要元气满满哦！'
            },
            {
              things:'今天也要元气满满哦！'
            },
            {
              things:'今天也要元气满满哦！'
            },
          ]
        }
      ],
      imgs:[
        {
          url:'https://s1.ax1x.com/2018/04/16/CevgiT.jpg'
        },
        {
          url:'https://s1.ax1x.com/2018/04/16/Cexpwt.jpg'
        },
        {
          url:'https://s1.ax1x.com/2018/04/16/CevWz4.jpg'
        },
        {
          url:'https://s1.ax1x.com/2018/04/16/CevRWF.jpg'
        },
        {
          url:'https://s1.ax1x.com/2018/04/16/CevhQJ.jpg'
        }
      ]
    }
  },
  computed:{
    ...mapGetters(['getMemNum','movieNum']),
  },
  mounted(){
    this.getNum()
  },
  methods:{
    getNum(){
      this.$store.dispatch('getMemNum')
      this.$store.dispatch('getMovieNum')
    }
  }
}
</script>
<style type="text/css" scoped lang="less">
  .box{
    width: 100%;
    margin: 20px auto auto auto;
    height: 700px;
    background: url(http://oo9xy1zeh.bkt.clouddn.com/wallhaven-649048.jpg);
    background-size: cover;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    .intro{
      text-align: center;
      position: relative;
      color:#fff;
      .title{
        font-size: 24px;
        font-weight: bold;
      }
      p{
        font-size: 18px;
      }
    }
  }
  .clear{
    clear: both;
  }
</style>
