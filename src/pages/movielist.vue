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
    <el-table :data="userData" border style="margin:5px auto">
      <el-table-column label="ID" type="index"  prop="id"></el-table-column>
      <el-table-column label="封面" prop="img" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width:70px;height:100px;">
        </template>
      </el-table-column>
      <el-table-column label="名称" prop="name"  width="200"></el-table-column>
      <el-table-column label="类型" prop="type" width="100"></el-table-column>
      <el-table-column label="国家" prop="country"  width="100"></el-table-column>
      <el-table-column label="状态" prop="status"  width="100"></el-table-column>
      <el-table-column label="收藏量" prop="collectNum"  width="100"></el-table-column>
      <el-table-column label="上映年份" prop="time"  width="130"></el-table-column>
      <el-table-column label="简介" prop="intro" class-name="intro"></el-table-column>
      <el-table-column label="操作"  width="180">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="editorRow(scope.$index, userData)">修改</el-button>
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, userData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
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
    var validateImg = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入头像地址Url'));
        } else {
            let reg = /http:[/]{2}[a-zA-Z0-9.%=/]{1,}[.](jpg|png)/g
            if (!reg.test(this.form.img)) {
                callback(new Error('请输入正确的地址Url'));
            }else{
                callback();                
            }
        }
    };
    return{
      userData:[
        {
          id:'1',
          name:'权力的游戏',
          type:'类型',
          img:'http://img.neets.cc/video/91159fd3a9064b93bfbbc12b74a0484b/large.jpg',
          collectNum:'2000',
          country:'美国',
          time:'2017-6-10',
          intro:'支持解析下载抖音、muse(musical.ly)、今日头条、西瓜视频、内涵段子、微博、秒拍、小咖秀、晃咖、火山、快手、映客、陌陌、美拍、小影、阳光宽频等平台的视频，功能强大，美滋滋，想下哪里下哪里，so easy!',
          status:'完结',
        },
         {
          id:'2',
          name:'权力的游戏',
          img:'http://img.neets.cc/video/91159fd3a9064b93bfbbc12b74a0484b/large.jpg',
          type:'类型',
          country:'美国',
          collectNum:'2000',
          time:'2017-6-10',
          intro:'简介',
          status:'完结',
        },
         {
          id:'3',
          name:'权力的游戏',
          img:'http://img.neets.cc/video/91159fd3a9064b93bfbbc12b74a0484b/large.jpg',
          type:'类型',
          country:'美国',
          collectNum:'2000',
          time:'2017-6-10',
          intro:'简介',
          status:'完结',
        },
         {
          id:'4',
          name:'权力的游戏',
          img:'http://img.neets.cc/video/91159fd3a9064b93bfbbc12b74a0484b/large.jpg',
          type:'类型',
          country:'美国',
          collectNum:'2000',
          time:'2017-6-10',
          intro:'简介',
          status:'完结',
        },
      ],
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
            { required: true,validator: validateImg, trigger: 'blur' }
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
    }
  },
  mounted(){
    // 获取当前页电影
    this.$store.dispatch('getAllMovie',
      { 
        root:1,
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
    editorRow(index,rows){
      // console.log(index);
      // console.log(rows);
      this.dialogFormVisible  = !this.dialogFormVisible;
      this.id = index + 1
    },
    handlrTime(time){
        // 时间处理函数
        let handlr = new Date(time);
        let newTime = handlr.toLocaleString().split(' ')[0].split('/').join('-');
        return newTime
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
      page = Math.ceil((index-1)/this.pageSize)
      return page
    },
    // 删除
    deleteRow(index, rows) {
      this.curPage = this.computedCurPage(index,rows)
      this.$confirm('将要删除该资源, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('delMovie',
            { 
              root:1,
              id:index, //删除的用户id
              pageSize:this.pageSize, //每页数据量
              curPage:this.curPage //当前页
            }
          ).then(()=>{
            this.$store.dispatch('getMovieNum')
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
    min-height: 700px;
  }
  .el-table .cell{
     word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden; /** 隐藏超出的内容 **/
  }
</style>
