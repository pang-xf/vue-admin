const routerApi = require('./route');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParase = require('cookie-parser');
const app = express();
app.use(bodyParser.json());
app.use(cookieParase());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
// 后端api路由
app.use('/api', routerApi);
// 监听端口
app.listen(3030);
console.log('success listen at port:3030......');