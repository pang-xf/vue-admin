
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
  // 修改影片信息
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