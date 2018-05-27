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
        :total = userNum
        :page-size = pageSize
        @current-change = changeData
      >
      </el-pagination>
    </div>
    <!-- 对话框 -->
    <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible" width="550px">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" auto-complete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="头像" :label-width="formLabelWidth" prop="imgUrl">
          <el-input v-model="form.imgUrl" auto-complete="off" placeholder="请输入图像地址"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
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
      form: {
        name: '',
        sex:'',
        imgUrl:''
      },
      rules:{
        name:[
            {required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        imgUrl:[
            { required: true,message:'请输入图片地址', trigger: 'blur' }
        ],
        sex:[
            {required: true, message: '请选择性别', trigger: 'blur' },
        ],
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      id:null
    }
  },
  mounted(){
    this.$store.dispatch('getAllMembers',
      { 
        root:1,
        pageSize:this.pageSize, //每页数据量
        curPage:this.curPage //当前页
      }
    ),
    this.$store.dispatch('getUserNum')
  },
  computed:{
    ...mapGetters([
      'members',
      'userNum'
    ])
  },
  methods:{
    editorRow(index,rows){
      this.dialogFormVisible  = !this.dialogFormVisible;
      this.id = index
      let userIndex = Math.floor(this.id-10*(this.curPage-1))
      if(index<10){
         this.form.name = this.members[index-2].USER
        this.form.sex = this.members[index-2].SEX
        this.form.imgUrl = this.members[index-2].AVTAR
      }else{
        this.form.name = this.members[userIndex-2].USER
        this.form.sex = this.members[userIndex-2].SEX
        this.form.imgUrl = this.members[userIndex-2].AVTAR
      }
    },
    submitForm(form){
      // 做到这里了 this.$refs[form].model 拿到了表单得值 现在需要返回给后台做操作
      this.$refs[form].validate((valid) => {
        if (valid) {
          //   数据格式正确
          console.log(this.$refs[form].model);
          this.dialogFormVisible = false
          this.$store.dispatch('editUser',{
            id: this.id,
            form:this.$refs[form].model
          })
          this.$router.go(0)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    computedCurPage(index,rows){
      //计算当前页码
      let page = null;
      page = Math.ceil((index-1)/this.pageSize)
      return page
    },
    deleteRow(index, rows) {
      //每次删除重新获取页码
      console.log(index);
      this.curPage = this.computedCurPage(index,rows)
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
          ).then(()=>{
            this.$store.dispatch('getUserNum')
          })
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
