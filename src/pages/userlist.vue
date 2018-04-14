<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">用户列表</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >用户列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="box">
    <el-table :data="members" border style="width:60%;margin:5px auto">
      <el-table-column label="ID"  width="60">
        <template slot-scope="scope">
          {{scope.row.id - 1}}
        </template>
      </el-table-column>
      <el-table-column label="头像" width="150">
        <template slot-scope="scope">
          <img :src=scope.row.AVTAR alt="" style="display:block;height:50px;width:50px;margin: 0 auto;border-radius:50%;" class="avtarImg">
        </template>
      </el-table-column>
      <el-table-column label="用户名" prop="USER"></el-table-column>
      <el-table-column label="性别" prop="SEX" width="50"></el-table-column>
      <el-table-column label="注册时间" prop="REGTIME" width="250"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size='small' @click.native.prevent="editorRow(scope.row.id, members)">修改</el-button>
          <el-button type="danger" size='small' @click.native.prevent="deleteRow(scope.row.id, members)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total = total
        :page-size = pageSize
        @current-change = changeData
      >
      </el-pagination>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      pageSize:10,
      curPage:1,
    }
  },
  mounted(){
    this.$store.dispatch('getAllMembers',
      { 
        root:1,
        pageSize:this.pageSize, //每页数据量
        curPage:this.curPage //当前页
      }
    )
    console.log(this.total);
  },
  computed:{
    total () {
      return this.$store.state.members.members.length
    },
    ...mapGetters([
      'members',
    ])
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
          this.$store.dispatch('delMembers',
            { 
              root:1,
              id:index, //删除的用户id
              pageSize:this.pageSize, //每页数据量
              curPage:this.curPage //当前页
            }
          )
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
      });
    },
    changeData(val){
      this.curPage = val
      this.$store.dispatch('getAllMembers',
        { 
          root:1,
          pageSize:this.pageSize, //每页数据量
          curPage:this.curPage //当前页
        }
      )
      console.log('当前页是: ' +this.curPage);
    }
  }
}
</script>

<style scoped lang="less">
  .box-body{
    width: 100%;
    overflow: auto;
  }
  .box{
    min-height: 700px;
    .avtarImg{
      transition: all .2s;
      cursor: pointer;
      &:hover{
        transform: scale(1.05)
      }
    }
  }
  .page{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
