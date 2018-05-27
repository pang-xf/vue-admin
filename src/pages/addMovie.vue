<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">添加新资源</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >添加新资源</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="box">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules"> 
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
        <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
    </el-form>
  </div>
  <!-- dialog -->
  <el-dialog
    title="添加结果"
    :visible.sync="dialogVisible"
    width="15%"
    >
    <span>添加成功</span>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeDialog">确 定</el-button>
    </span>
    </el-dialog>`
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
                { required: true,message: '请输入图片地址', trigger: 'blur' }
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
        dialogVisible: false
    }
  },
  computed:{
    ...mapGetters([
      'addStatus',
    ])
  },
  methods:{
    closeDialog(){
        this.dialogVisible = false;
        this.$router.go(0); //刷新当前页
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
            this.$store.dispatch('addMovie',
                {
                    form:this.$refs[form].model
                }
            
            ); //触发action
            this.$alert('影片添加成功', '添加成功', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `新的影片添加成功`
                    })
                }
            })
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
    }
  }
}
</script>

<style scoped lang="less">
  .clear{
    clear: both;
  }
  .box-body{
    width: 100%;
    overflow: auto;
  }
  .box{
    width: 35%;
    margin: 100px auto 40px auto;
    padding: 40px;
    min-height: 0;
  }
</style>
