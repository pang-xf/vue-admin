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
    <el-table :data="movie" border style="margin:5px auto">
      <el-table-column label="ID"  prop="id" width="60"></el-table-column>
      <el-table-column label="封面" prop="img" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.IMG" alt="" style="width:70px;height:100px;">
        </template>
      </el-table-column>
      <el-table-column label="名称" prop="NAME"  width="200"></el-table-column>
      <el-table-column label="类型" prop="TYPE" width="100"></el-table-column>
      <el-table-column label="国家" prop="COUNTRY"  width="100"></el-table-column>
      <el-table-column label="状态" prop="STATE"  width="100"></el-table-column>
      <el-table-column label="评分" prop="RATE"  width="100"></el-table-column>
      <el-table-column label="收藏量" prop="DINGYUE"  width="100"></el-table-column>
      <el-table-column label="上映年份" prop="TIME"  width="130"></el-table-column>
      <el-table-column label="简介" prop="PROFILE" class-name="intro"></el-table-column>
      <el-table-column label="操作"  width="180">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="editorRow(scope.$index,scope.row.id)">修改</el-button>
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index,scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total = movieNum
      :page-size = pageSize
      @current-change = changeData
    >
    </el-pagination>
  </div>
  <!-- diglog -->
  <el-dialog title="修改影片信息" :visible.sync="dialogFormVisible" width="500px">
    <el-form ref="form" :model="form" label-width="80px" width="80%" :rules="rules"> 
    <el-form-item label="影片名" prop="name">
        <el-input v-model="form.name" placeholder="请输入影片名"></el-input>
    </el-form-item>
    <el-form-item label="影片图片" prop="img">
        <el-input v-model="form.img" placeholder="请输入图片地址,暂时不支持直接上传"></el-input>
    </el-form-item>
    <el-form-item label="地区" prop="region">
        <el-select v-model="form.region" placeholder="请选择地区">
        <el-option label="大陆" value="大陆"></el-option>
        <el-option label="香港" value="香港"></el-option>
        <el-option label="台湾" value="台湾"></el-option>
        <el-option label="韩国" value="韩国"></el-option>
        <el-option label="日本" value="日本"></el-option>
        <el-option label="美国" value="美国"></el-option>
        <el-option label="英国" value="英国"></el-option>
        <el-option label="泰国" value="泰国"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="上映年代" prop="time">
        <el-date-picker type="month" placeholder="选择时间" v-model="form.time"></el-date-picker>
    </el-form-item>
    <el-form-item label="类型" prop="type">
        <el-radio-group v-model="form.type">
            <el-radio label="电视剧"></el-radio>
            <el-radio label="电影"></el-radio>
            <el-radio label="动漫"></el-radio>
            <el-radio label="综艺"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status">
            <el-radio label="连载"></el-radio>
            <el-radio label="完结"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="影片简介" prop="intro">
        <el-input type="textarea" v-model="form.intro" placeholder="请输入简介"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('form')">修改</el-button>
        <el-button @click="resetForm('form')">取消</el-button>
    </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      form: {
        name: '',
        img: '',
        region: '',
        time: '',
        type: '',
        status: '',
        intro: ''
      },
      rules:{
        name:[
            {required: true, message: '请输入影片名', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        img:[
            { required: true, message: '请填写图片地址', trigger: 'blur' }
        ],
        region:[
            {required: true, message: '请选择地区', trigger: 'blur' },
        ],
        time:[
            {required: true, message: '请选择时间', trigger: 'blur' },
        ],
        type:[
            {required: true, message: '请选择类型', trigger: 'blur' },
        ],
        status:[
              {required: true, message: '请选择状态', trigger: 'blur' },
        ],
        intro:[
              {required: true, message: '请选择简介', trigger: 'blur' },
        ]
      },
      dialogFormVisible: false,
      formLabelWidth: '80px',
      id:null,//点击修改按钮时的id值
      pageSize:10,
      curPage:1,
    }
  },
  mounted(){
    // 获取当前页电影
    this.$store.dispatch('getAllMovie',
      { 
        pageSize:this.pageSize, //每页数据量
        curPage:this.curPage //当前页
      }
    ),
    // 获取总数据量
    this.$store.dispatch('getMovieNum')
  },
  computed:{
    ...mapGetters([
      'movie',
      'movieNum'
    ])
  },
  methods:{
    // 点击修改按钮
    editorRow(index,id){
      this.dialogFormVisible  = !this.dialogFormVisible;
      this.id = id
      this.form.name = this.movie[index].NAME
      this.form.img = this.movie[index].IMG
      this.form.region = this.movie[index].COUNTRY
      this.form.time = this.movie[index].TIME
      this.form.type = this.movie[index].TYPE
      if(this.movie[index].STATE == '1'){
        this.form.status = '连载'
      }else{
        this.form.status = '完结'
      }
      this.form.intro = this.movie[index].PROFILE
      console.log(this.id);
    },
    handlrTime(time){
        // 时间处理函数
        let handlr = new Date(time);
        let newTime = handlr.toLocaleString().split(' ')[0].split('/').join('-');
        return newTime
    },
    changeData(val){
      this.curPage = val
      this.$store.dispatch('getAllMovie',
        { 
          pageSize:this.pageSize, //每页数据量
          curPage:this.curPage //当前页
        }
      )
    },
    submitForm(form){
       // 进来应该先处理数据  判断数据格式是否正确
      this.$refs[form].validate((valid) => {
        if (valid) {
          //   数据格式正确
          let time = this.handlrTime(this.$refs[form].model.time) //获取正确的时间格式
          this.form.time = time; //重置form表单的时间并提交
          //console.log(this.$refs[form].model); //这时的表单是正确的  传给后台  返回给前端  增加操作完成
          this.$store.dispatch('editMovie',
            {
              id:this.id,
              form:this.$refs[form].model
            }
          ); //触发action  还有需要重新dispacth下  重新获取全部的影片信息 或者刷新当前页
          this.$router.go(0)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(form) {
      this.$refs[form].model.name = ''
      this.$refs[form].model.img = ''
      this.$refs[form].model.region = ''
      this.$refs[form].model.time = ''
      this.$refs[form].model.type = ''
      this.$refs[form].model.status = ''
      this.$refs[form].model.intro = ''
      this.dialogFormVisible  = !this.dialogFormVisible;
    },
    computedCurPage(index,rows){
      //计算当前页码
      let page = null;
      page = Math.ceil((rows-1)/this.pageSize)
      return page
    },
    // 删除
    deleteRow(index, id) {
      this.curPage = this.computedCurPage(index,id)
      console.log(index);
      console.log(id);
      this.$confirm('将要删除该资源, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('delMovie',
            { 
              id:id, //删除的电影id
              pageSize:this.pageSize, //每页数据量
              curPage:this.curPage //当前页
            }
          ).then(()=>{
            this.$store.dispatch('getMovieNum')
          }).then(()=>{
            this.$store.dispatch('getAllMovie',
            { 
              pageSize:this.pageSize, //每页数据量
              curPage:this.curPage //当前页
            })
          })
          this.$message({
              type: 'success',
              message: '删除成功!'
          });
          // rows.splice(index, 1);
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

<style  lang="less">
  .box-body{
    width: 100%;
    overflow: auto;
  }
  .box{
    // min-height: 700px;
  }
  .el-table .cell{
     word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden; /** 隐藏超出的内容 **/
  }
  .page{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
