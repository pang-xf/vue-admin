var mysql = require('mysql');
var mysqlConf = require('./db');

// 连接数据库
var pool = mysql.createPool({
  host: mysqlConf.mysql.host,
  user: mysqlConf.mysql.user,
  password: mysqlConf.mysql.password,
  database: mysqlConf.mysql.database,
  port: mysqlConf.mysql.port
})
var jsonWrite = function (res, data) {
  if(typeof data === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(data);
  }
};
// 总用户数
var getLen = function(){
  return new Promise((resolve,reject)=>{
    const sql =`SELECT * FROM USER WHERE root = 1`
    pool.getConnection((err, connection) => {
      connection.query(sql,(err, result) => {
        let len = result.length
        resolve(len)
        connection.release();
      })
    })
  })
};
// 获得管理员信息
var getAdminMsg = function(pageSize,curPage){
  return new Promise((resolve,reject)=>{
    let root = 0;
    pool.getConnection((err, connection) => {
      let sql = `SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root}`
      connection.query(sql,(err, result) => {
        resolve(result)
        connection.release();
      })
    })
  })
};
// 所有得用户信息
var getAllUserMsg = function(pageSize,curPage){
  return new Promise((resolve,reject)=>{
    let start = pageSize*(curPage-1); //起始的位置
    let root = 1;
    pool.getConnection((err, connection) => {
      let sql = `SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${pageSize} `
      connection.query(sql,(err, result) => {
        // 获取所有的数据长度 返回给前端坐分页
        resolve(result)
        connection.release();
      })
    })
  })
};
// 添加影片信息
var addMovie = function(form){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err, connection) => {
      let sql = `insert into USER (name,img,country,time,type,status,intro) values (${form.name},${form.img},${form.region},${form.time},${form.type},${form.status},${form.intro}); `
      connection.query(sql,(err, result) => {
        // 添加数据 返回给前端添加结果  成功为1 失败为0
        console.log(result);
        if(result){
          resolve(result)
        }else{
          reject(error)
        }
        connection.release();
      })
    })
  })
};
// 修改管理员信息
var editAdmin = function(key,value){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err, connection) => {
      let sql = `UPDATE USER SET ${key} = ${value}`
      connection.query(sql,(err, result) => {
        // 添加数据 返回给前端添加结果  成功为1 失败为0
        console.log(result);
        if(result){
          resolve(result)
        }else{
          reject(error)
        }
        connection.release();
      })
    })
  })
};
// 修改影片信息
var editMovie = function(id,form){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err, connection) => {
      let sql = `UPDATE MOVIE SET (name,img,country,time,type,status,intro) values (${form.name},${form.img},${form.region},${form.time},${form.type},${form.status},${form.intro}) WHERE ID = ${id}`
      connection.query(sql,(err, result) => {
        // 添加数据 返回给前端添加结果  成功为1 失败为0
        console.log(result);
        if(result){
          resolve(result)
        }else{
          reject(error)
        }
        connection.release();
      })
    })
  })
};
// 查询用户信息或者影片信息
var handlrSearch = function(type,name){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err, connection) => {
      let sql;
      // 这里的sql没写好 不知道数据库结构了
      if(type=='user'){
        sql = `SELECT ID,USER,AVTAR,SEX,REGTIME FROM USER WHERE name = ${name};`
      }else{
        sql = `SELECT ID,NAME,AVTAR,SEX,REGTIME FROM MOVIE WHERE name = ${name};`
      }
      console.log(sql);
      connection.query(sql,(err, result) => {
        console.log(result);
        if(result){
          resolve(result)
        }else{
          reject(error)
        }
        connection.release();
      })
    })
  })
};
module.exports = {
  //获取全部用户数量
  async getUserCount(req, res, next){
    const sql =`SELECT * FROM USER WHERE root = 1`
    let len = await getLen()
    // console.log('len: '+ len);
    res.json({
      code:'1',
      msg:'操作成功',
      length:len
    })
  },
  // 获取全部用户列表或者管理原信息
  async getUserAll(req, res, next) {
    let count = req.query.pageSize; //每页的数据量 前端传入
    let curPage = req.query.curPage;//当前页  前端传入
    let root  = req.query.root //用户类型
    //这里是获取管理员信息
    if(root === 0){
      let getAdmin = await getAdminMsg();
      jsonWrite(res, getAdmin);
      return
    }else{ 
      //这里是获取的所有的用户信息
      let allUserMsg = await getAllUserMsg(count,curPage);
      jsonWrite(res, allUserMsg);
    }
  },
  // 删除用户信息
  async delUser(req, res, next) {
    let id  = req.query.id //用户类型
    let root  = req.query.root //用户类型
    let count = req.query.pageSize; //每页的数据量 前端传入
    let curPage = req.query.curPage;//当前页  前端传入
    let len = await getLen() //当前总用户数
    let offset = len%count  //当前页剩余得偏移量
    let start = count*(curPage-1); //起始的位置
    console.log('offset: ' +offset);
    const sql =`SELECT * FROM USER WHERE root = 1`
    if(offset<=1){
      // 说明再删就翻页了
      curPage = curPage-1
      if(curPage==1){
        start = 0
      }
    }
    if(root == 1){
      const sql = `DELETE FROM USER WHERE id = ${id}`
      pool.getConnection((err, connection) => {
        connection.query(sql,(err, result) => {
          if(result.affectedRows == 1){
            const sql1 =`SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${count} `
            pool.getConnection((err, connection) => {
              connection.query(sql1,(err, result) => {
                jsonWrite(res, result);
                connection.release();
              })
            })
          }else{
            res.json({
              code:'-1',
              msg:'操作失败'
            })
            return
          }
        })
      })
    }else{
      res.json({
        code:'-1',
        msg:'不被允许的操作'
      })
    }
  },
  // 修改用户信息
  async editUser(req, res, next) {
    //这里是获取管理员信息
    if(root == 0){
      return
    }else{ 
      //这里是获取的所有的用户信息
      let allUserMsg = await getAllUserMsg(count,curPage);
      jsonWrite(res, allUserMsg);
    }
  },
  // 添加影片信息
  async addMovie(req, res, next) {
    let form  = req.query.form //添加的表单数据
    let addStatus = await addMovie(form)
    console.log(addStatus);  //这里没做   失败返回-1
    res.json({
      code:1,
      msg:'添加成功'
    })
  },
  // 修改管理员信息
  async editAdmin(req, res, next) {
    let key  = req.query.key
    let value  = req.query.value
    let editStutas = await editAdmin(key,value)
    res.json({
      code:1,
      msg:'修改成功'
    })
  },
  // 修改影片信息
  async editMovie(req, res, next) {
    // 传两个参数过去  一个是id 一个是新值
    let id  = req.query.key
    let form  = req.query.form
    let editStutas = await editMovie(id,form)
    res.json({
      code:1,
      msg:'修改成功'
    })
  },
  // 删除影片信息
  async delMovie(req, res, next) {
    let id  = req.query.id //影片id
    let count = req.query.pageSize; //每页的数据量 前端传入
    let curPage = req.query.curPage;//当前页  前端传入
    let len = await getLen() //当前总用户数
    let offset = len%count  //当前页剩余得偏移量
    let start = count*(curPage-1); //起始的位置
    console.log('offset: ' +offset);
    const sql =`SELECT * FROM USER WHERE root = 1`
    if(offset<=1){
      // 说明再删就翻页了
      curPage = curPage-1
      if(curPage==1){
        start = 0
      }
    }
    const sql = `DELETE FROM USER WHERE id = ${id}`
      pool.getConnection((err, connection) => {
        connection.query(sql,(err, result) => {
          if(result.affectedRows == 1){
            const sql1 =`SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${count} `
            pool.getConnection((err, connection) => {
              connection.query(sql1,(err, result) => {
                jsonWrite(res, result);
                connection.release();
              })
            })
          }else{
            res.json({
              code:'-1',
              msg:'操作失败'
            })
            return
          }
        })
      })
  },
  // 搜索用户信息
  async searchMovie(req, res, next) {
    // 传1个参数过去  用户名
    let name  = req.query.name
    let userMsg = await handlrSearch('user',name)
    console.log(userMsg);
    res.json({
      code:1,
      msg:'查询成功',
      data:userMsg
    })
  },
  async searchUser(req, res, next) {
    // 传1个参数过去  用户名
    let name  = req.query.name
    let movieMsg = await handlrSearch('movie',name)
    console.log(movieMsg);
    res.json({
      code:1,
      msg:'查询成功',
      data:movieMsg
    })
  },
}