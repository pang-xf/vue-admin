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
          <img src="https://s1.ax1x.com/2018/04/16/CevgiT.jpg" alt="">
          <p>影视资源管理系统后台</p> 
        </div>
        <div class="sysDetail">

        </div>
    </div>
</div>
</div>
</template>
<script type="text/javascript">
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
  }
}
</script>
<style type="text/css" scoped lang="less">
  .box{
    margin-bottom: 10px;
    width: 60%;
    margin: 0 auto;
    background: #fff;
    .intro{
      text-align: center;
      position: relative;
      p{
        position: absolute;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
    .sysDetail{
      background: saddlebrown;
      width: 100%;
      height: 200px;
      margin-top: 50px;
    }
  }
  .clear{
    clear: both;
  }
</style>
