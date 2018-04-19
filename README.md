
这是一个追剧网站的后台管理系统。模板参考了 [mengdu](https://github.com/mengdu)的项目，并在其基础上加了后台的功能。前端框架采用的`vue`,ui框架用的是`element-ui`,后台的框架用的`express`,数据库是`mysql`。

主要的功能是对影片资料的展示，影片的增删改查，对用户信息的展示，用户的增删改查，还有管理员自身资料的管理等等。 并且整个管理后台只支持管理员登录，不支持用户登录以及注册，后期如果涉及到更改，会增加权限分配功能，让用户也可以登录，只是管理的权限不同。(不过就针对这个项目而言，貌似不需要)


项目地址: [vue-admin](https://github.com/liyushilezhi/vue-admin)

警告,下面多图预警

- 登录页

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419114012.png)

登录页是整个项目的入口,会做用户名密码和验证码的判断，验证码是后台生成的，实现了点击刷新，并且验证码的值保存在cookie当中，方便前端做登录判断

- 首页

登录成功后跳转首页，首页显示了当前注册的总人数和当前收录的总影片数。

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419152727.png)

咳,ui功底不行啊，，，，将就看吧..

- 用户列表

用户列表页支持分页查询，支持对用户信息的修改以及用户的删除操作。

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419152845.png)

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419152947.png)

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153020.png)

- 影片列表

影片列表的功能同用户列表

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153135.png)

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153145.png)

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153154.png)

- 添加影片

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153511.png)

- 搜索

搜索包括用户搜索以及影片搜索，只做了按名称模糊搜索，如果有时间的话可以做全，原理都是很简单的.

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153648.png)

- 设置

设置页可以对管理员的信息进行修改

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153737.png)

- 关于

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419153830.png)



后台数据库表:

影片数据表: movie

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419155133.png)

用户数据表: user

![](http://oo9xy1zeh.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180419155118.png)

> 安装

`git clone git@github.com:liyushilezhi/vue-admin.git`

`cd vue-admin`

`cnpm i`

开启node后台服务

`npm start`  

`npm run dev`

上面的操作都是基于你有数据库的情况下。

在本地新建数据库，结构参照上面的数据表,并且配置`server`文件夹下的`db.js`

```javascript
// 数据库连接配置
module.exports = {
  mysql: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'moviedb',
    port: '3306'
  }
}
```

这时候再执行 `npm start`  `npm run dev`即可

我的博客: [前端开发小哥](http://neverlove.me)