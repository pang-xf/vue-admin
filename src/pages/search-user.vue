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
          用户搜索（暂只支持按用户名搜索,支持模糊搜索）: <br>
          <br>
          <el-input v-model="input" :placeholder=placeholder class="searchInput"></el-input>
          <el-button type="primary" @click="searchUserMsg">搜索</el-button>
        </div>
        <div class="tableMsg" v-show="search_User.code == 1">
          <el-table :data="search_User.data">
            <el-table-column label="头像">
              <template slot-scope="scope">
                <img :src="scope.row.AVTAR" alt="" style="width:50px;height:50px;border-radius:50%">
              </template>
            </el-table-column>
            <el-table-column label="用户名" prop="USER"></el-table-column>
            <el-table-column label="性别" prop="SEX"></el-table-column>
            <el-table-column label="注册时间" prop="REGTIME"></el-table-column>
            <el-table-column label="身份" prop="ROOT"></el-table-column>
          </el-table>
        </div>
        <div v-show='search_User.code == -1' class="tips">
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
      input:'',
      placeholder:'请输入用户名',
    }
  },
  computed:{
    ...mapGetters(['search_User'])
  },
  methods:{
    searchUserMsg(){
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
        width: 85%;
      }
    }
    .tableMsg{
      // width: 80%;
    }
  }
  .clear{
    clear: both;
  }
  .tips{
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }
</style>
