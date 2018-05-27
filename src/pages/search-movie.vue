<template>
<div class="body">
    <div class="page-body">
      <div class="page-header">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{path: '/'}">主页</el-breadcrumb-item>
          <el-breadcrumb-item >影片信息搜索</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="box">
        <div class="header">
          影片搜索（暂只支持按片名搜索,支持模糊搜索）: <br>
          <br>
          <el-input v-model="input" :placeholder=placeholder class="searchInput"></el-input>
          <el-button type="primary" @click="searchUser">搜索</el-button>
        </div>
        <div class="tableMsg" v-show="search_Movie.code==1 && input">
          <el-table :data="search_Movie.data">
            <el-table-column label="封面" prop="name" width="70">
               <template slot-scope="scope">
                <img :src="scope.row.IMG" alt="" style="width:60px;height:90px;">
              </template>
            </el-table-column>
            <el-table-column label="片名" prop="NAME" width="120"></el-table-column>
            <el-table-column label="国家" prop="COUNTRY" width="70"></el-table-column>
            <el-table-column label="类型" prop="TYPE" width="70"></el-table-column>
            <el-table-column label="状态" prop="STATE" width="70"></el-table-column>
            <el-table-column label="评分" prop="RATE" width="70"></el-table-column>
            <el-table-column label="订阅数" prop="DINGYUE" width="70"></el-table-column>
            <el-table-column label="简介" prop="PROFILE" id="intro"></el-table-column>
          </el-table>
        </div>
        <!-- <div v-show='!input' class="tips">
          请输入查询条件
        </div> -->
        <div v-show='search_Movie.code == -1' class="tips">
          没有这条数据
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
      placeholder:'请输入片名',
      text:'请输入查询条件'
    }
  },
  computed:{
    ...mapGetters(['search_Movie']),
  },
  methods:{
    searchUser(){
      if(this.input==''){
        this.$notify.error({
          title: '检索错误',
          message: '检索内容不能为空'
        });
        return
      }
      this.$store.dispatch('searchMovie',{name:this.input})        
    },
  }
}
</script>
<style type="text/css" scoped lang="less">
  .box{
    width: 60%;
    margin: 100px auto auto auto;
    // height: 500px;
    font-size: 16px;
    // min-height: 600px;
    .header{
      margin-bottom: 30px;
      width: 100%;
      .searchInput{
        width:90%;
      }
    }
    .tableMsg{
      // width: 80%;
    }
  }
  #intro{
    word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden; /** 隐藏超出的内容 **/
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
