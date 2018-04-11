<template>
<div class="body">
    <div class="page-body">
      <div class="page-header">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{path: '/'}">主页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="box">
        <div class="wrap">        
          <el-card class="systemMsg">
            <div slot="header" class="clearfix">
              <span>追剧管家系统信息</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
            </div>
            <div  class="text item">
              <p>当前用户数:</p>
              <p>昨日活跃用户数量:</p>
              <p>昨日注册用户数量:</p>
              <p>待处理信息:</p>
            </div>
            <div class="clear"></div>
          </el-card>
          <el-card class="admin-msg-card">
            <div slot="header">
              <span>管理员信息</span>
            </div>
            <div v-for="(item,index) in user" :key="index" class="admin-msg-card-wrap">
              <div class="avtar">
                <img src="../assets/user.jpg" alt="">
              </div>
              <div class="msg">
                <p>用户名: {{item.name}}</p>
                <p>性别: {{item.sex}}</p>
                <p>邮箱: {{item.email}}</p>
                <p>个人简介: {{item.intro}}</p>
              </div>
            </div>
            <div class="clear"></div>
          </el-card>
          <div class="clear"></div>
        </div>
        <div class="imgs">
          <img src="https://i.loli.net/2018/04/11/5acde3825eaf5.jpg" alt="">
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
          email: '335136854@qq.com',
          intro: '全都是泡沫~~~~'
        }
      ]
    }
  }
}
</script>
<style type="text/css">
  .imgs{
    width: 960px;
    height: 500px;
    margin-top: 20px;
    border-radius: 6px;
  }
  .imgs img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .wrap{
    /* height: 600px; */
    width: 100%;
    font-size: 17px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .admin-msg-card{
    width: 45%;
    /* float: right; */
  }
  .admin-msg-card-wrap{
    height: 100%;
    height: 200px;
  }
  .avtar{
    float: left;
    width: 30%;
    height: 100%;
  }
  .avtar img{
    position: relative;
    left: 70px;
    top: 15px;
  }
  .msg{
    float: left;
    width: 70%;
    height: 100%;
  }
  .clear{
    clear: both;
  }
  .systemMsg{
    width: 45%;
    /* float: left; */
  }
</style>
