<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">影片列表</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >影片列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="box">
    <el-table :data="userData">
      <el-table-column label="ID" type="index"  prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column label="收藏量" prop="collectNum"></el-table-column>
      <el-table-column label="上映年份" prop="time"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="editorRow(scope.$index, userData)">修改</el-button>
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, userData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      userData:[
        {
          id:'1',
          name:'权力的游戏',
          type:'类型',
          collectNum:'2000',
          time:'2017-6-10',
        },
         {
          id:'2',
          name:'权力的游戏',
          type:'类型',
          collectNum:'2000',
          time:'2017-6-10',
        },
         {
          id:'3',
          name:'权力的游戏',
          type:'类型',
          collectNum:'2000',
          time:'2017-6-10',
        },
         {
          id:'4',
          name:'权力的游戏',
          type:'类型',
          collectNum:'2000',
          time:'2017-6-10',
        },
      ]
    }
  },
  methods:{
    editorRow(index,rows){
      console.log('后台操作');
      console.log(index);
      console.log(rows);
    },
    deleteRow(index, rows) {
      this.$confirm('将要删除该用户, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          rows.splice(index, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
      });
    }
  }
}
</script>

<style scoped>
  .box-body{
    width: 100%;
    overflow: auto;
  }
  .box{
    min-height: 700px;
  }
</style>
