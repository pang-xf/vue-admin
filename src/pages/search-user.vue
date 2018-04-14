<template>
<div class="body">
    <div class="page-body">
      <div class="page-header">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{path: '/'}">主页</el-breadcrumb-item>
          <el-breadcrumb-item >用户信息搜索</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="box">
        <div class="header">
          <el-input v-model="input" placeholder="请输入用户名" class="searchInput"></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="tableMsg">
          <el-table :data="userData">
            <el-table-column label="ID" type="index"  prop="id" width="180"></el-table-column>
            <el-table-column label="用户名" prop="name"></el-table-column>
            <el-table-column label="性别" prop="sex"></el-table-column>
            <el-table-column label="注册时间" prop="regTime"></el-table-column>
          </el-table>
        </div>
      </div>
</div>
</div>
</template>
<script type="text/javascript">
export default {
  data(){
    return{
      userData:[
        {
          id:'1',
          name:'李宇',
          sex:'男',
          regTime:'2017-6-10'
        },
        {
          id:'1',
          name:'李宇',
          sex:'女',
          regTime:'2017-7-10'
        },
        {
          id:'1',
          name:'李宇',
          sex:'男',
          regTime:'2017-8-10'
        }
      ],
      input:''
    }
  },
}
</script>
<style type="text/css" scoped lang="less">
  .box{
    // width: 34%;
    // margin: 120px auto;
    // height: 500px;
    // font-size: 16px;
    min-height: 600px;
    .header{
      margin-bottom: 30px;
      width: 100%;
      .searchInput{
        width: 20%;
      }
    }
    .tableMsg{
      // width: 80%;
    }
  }
  .clear{
    clear: both;
  }
</style>
