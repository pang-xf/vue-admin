var express = require('express')
var router = express.Router();
var api = require('./api')
// 管理员登录
router.get('/api/login', function(req, res, next) {
  return api.login(req, res, next);
})
// 获取验证码
router.get('/api/getCaptcha', function(req, res, next) {
  return api.getCaptcha(req, res, next);
})
// 获取所有用户数量
router.get('/api/user/getUserCount', function(req, res, next) {
  return api.getUserCount(req, res, next);
})
// 获取所有电影数量
router.get('/api/movie/getMovieCount', function(req, res, next) {
  return api.getMovieCount(req, res, next);
})
// 获取所有用户信息
router.get('/api/user/getUserAll', function(req, res, next) {
  return api.getUserAll(req, res, next);
})
// 获取所有电影信息
router.get('/api/movie/getMovieAll', function(req, res, next) {
  return api.getMovieAll(req, res, next);
})
// 删除用户信息
router.get('/api/user/delUser', function(req, res, next) {
  return api.delUser(req, res, next);
})
// 删除电影信息
router.get('/api/movie/delMovie', function(req, res, next) {
  return api.delMovie(req, res, next);
})
// 添加影片信息
router.get('/api/movie/addMovie', function(req, res, next) {
  return api.addMovie(req, res, next);
})
// 修改用户信息
router.get('/api/user/editUser', function(req, res, next) {
  return api.editUser(req, res, next);
})
// 修改管理员信息
router.get('/api/admin/editAdmin', function(req, res, next) {
  return api.editAdmin(req, res, next);
})
// 修改影片信息
router.get('/api/movie/editMovie', function(req, res, next) {
  return api.editMovie(req, res, next);
})
// 获取管理员信息
router.get('/api/admin/getAdminMsg', function(req, res, next) {
  return api.getAdminMsg(req, res, next);
})
// 搜索用户信息
router.get('/api/searchUser', function(req, res, next) {
  return api.searchUser(req, res, next);
})
// 搜索影片信息
router.get('/api/searchMovie', function(req, res, next) {
  return api.searchMovie(req, res, next);
})
module.exports = router;