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
// 向前台返回JSON方法的简单封装
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
}