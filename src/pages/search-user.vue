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
          用户搜索（暂只支持按用户名搜索）: <br>
          <br>
          <el-input v-model="input" :placeholder=placeholder class="searchInput"></el-input>
          <el-button type="primary" @click="searchUser">搜索</el-button>
        </div>
        <div class="tableMsg" v-if="search_user">
          <!-- <el-table :data="search_user">
            <el-table-column label="用户名" prop="name"></el-table-column>
            <el-table-column label="性别" prop="sex"></el-table-column>
            <el-table-column label="注册时间" prop="regTime"></el-table-column>
          </el-table> -->
        </div>
        <div v-else>
          无数据
        </div>
      </div>
</div>
</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
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
      input:'',
      placeholder:'请输入用户名',
    }
  },
  computed:{
    // ...mapGetters('search_user')
  },
  methods:{
    searchUser(){
      this.$store.dispatch('searchUser',{name:this.input})
    }
  }
}
</script>
<style type="text/css" scoped lang="less">
  .box{
    width: 44%;
    margin: 100px auto auto auto;
    // height: 500px;
    font-size: 16px;
    // min-height: 600px;
    .header{
      margin-bottom: 30px;
      width: 100%;
      .searchInput{
        width: 60%;
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
