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
module.exports = {
  // 获取全部用户列表或者管理原信息
  getUserAll(req, res, next) {
    let count = req.query.pageSize; //每页的数据量 前端传入
    let curPage = req.query.curPage;//当前页  前端传入
    let start = count*(curPage-1); //起始的位置
    let root  = req.query.root //用户类型
    if(root === 0){
      const sql = `SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root}`
      pool.getConnection((err, connection) => {
        connection.query(sql,(err, result) => {
          jsonWrite(res, result);
          connection.release();
        })
      })
      return
    }else{
      const sql =`SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${count} `
      pool.getConnection((err, connection) => {
        connection.query(sql,(err, result) => {
          // 这里没做  获取所有的数据长度 返回给前端坐分页
          res.json({
            code:'1',
            msg:'操作成功',
            data:result,
            length:20
          })
          // jsonWrite(res, result);
          connection.release();
        })
      })
      return
    }
  },
  // 删除用户信息
  delUser(req, res, next) {
    let id  = req.query.id //用户类型
    let root  = req.query.root //用户类型
    let count = req.query.pageSize; //每页的数据量 前端传入
    let curPage = req.query.curPage;//当前页  前端传入
    let start = count*(curPage-1); //起始的位置
    if(root == 1){
      const sql = `DELETE FROM USER WHERE id = ${id}`
      pool.getConnection((err, connection) => {
        connection.query(sql,(err, result) => {
          if(result.affectedRows == 1){
            const sql1 =`SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${count} `
            pool.getConnection((err, connection) => {
              connection.query(sql1,(err, result) => {
                const sql2 = `ALTER TABLE user DROP id`; //删除原有自增Id
                pool.getConnection((err, connection) => {
                  connection.query(sql2,(err, result) => {
                    const sql3 = `ALTER TABLE user ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST;`//再创建自增ID
                    pool.getConnection((err, connection) => {
                      connection.query(sql3,(err, result) => {
                        // 这时候已经成功的删除ID并且让ID自增了  再重新的获取全部用户信息返回
                        const sql4 =`SELECT id,USER,AVTAR,SEX,REGTIME FROM USER WHERE root = ${root} limit ${start},${count} `
                        pool.getConnection((err, connection) => {
                          connection.query(sql4,(err, result) => {
                            jsonWrite(res, result);
                            connection.release();
                          })
                        })
                      })
                    })
                  })
                })
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
      return
    }else{
      res.json({
        code:'-1',
        msg:'不被允许的操作'
      })
      return
    }
  },
}