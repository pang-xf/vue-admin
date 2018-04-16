const menus = [
  {id: '0', label: '主页', path: '/', icon: 'fa fa-dashboard'},
  {
    id: 'userlist',
    icon: 'fa fa-user-circle-o',
    label: '用户列表',
    path: '/userlist'
  },
  {
    id: 'movielist',
    icon: 'fa fa-folder',
    label: '影片列表',
    path: '/movielist'
  },
  {
    id: 'addMovie',
    icon: 'fa fa-folder',
    label: '添加影片',
    path: '/addMovie'
  },
  {
    id: 'search',
    icon: 'fa fa-search-minus',
    label: '搜索',
    path: '/search',
    submenu: [
      {id: 'search-user', path: '/search-user', label: '用户搜索'},
      {id: 'search-movie', path: '/search-movie', label: '资源搜索'},
    ]
  },
  {
    id: 'setting',
    icon: 'fa fa-cog',
    label: '设置',
    path: '/setting',
  },
  {
    id: 'about',
    icon: 'fa fa-smile-o',
    label: '关于',
    path: '/about'
  },
  // {
  //   id: 'pages',
  //   icon: 'fa fa-circle-o',
  //   label: 'Pages 页面',
  //   submenu: [
  //     {id: 'p1', name: 'login', label: 'Login 登录'},
  //     {id: '400', path: '/404', label: '404'},
  //     {id: '500', path: '/500', label: '500'}
  //   ]
  // },
]
export default menus
