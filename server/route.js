var express = require('express')
var router = express.Router();
var api = require('./api')
// 获取所有用户数量
router.get('/api/user/getUserCount', function(req, res, next) {
  return api.getUserCount(req, res, next);
})
// 获取所有用户信息
router.get('/api/user/getUserAll', function(req, res, next) {
  return api.getUserAll(req, res, next);
})
// 删除用户信息
router.get('/api/user/delUser', function(req, res, next) {
  return api.delUser(req, res, next);
})
module.exports = router;