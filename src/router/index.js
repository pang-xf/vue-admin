import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: AppView,
      children: [
        {path: '/', name: 'home', component: Home},
        // {path: '/keyboard', name: 'c-keyboard', component: page('c-keyboard')},
        {path: '/loading', name: 'c-loading', component: page('c-loading')},
        // 这里开始是我需要的
        {path: '/404', name: '404', component: page('404')},
        {path: '/500', name: '500', component: page('500')},
        {path: '/userlist', name: 'userlist', component: page('userlist')},
        {path: '/movielist', name: 'movielist', component: page('movielist')},
        {path: '/about', name: 'about', component: page('about')},
        {path: '/setting', name: 'setting', component: page('setting')},
        {path: '/editPwd', name: 'editPwd', component: page('editPwd')},
        {path: '/search-user', name: 'search-user', component: page('search-user')},
        {path: '/search-movie', name: 'search-movie', component: page('search-movie')},
        {path: '/addMovie', name: 'addMovie', component: page('addMovie')},
      ]
    },
    {path: '/login', name: 'login', component: page('login')},
    // pages
    // {path: '/keyboard', name: 'p-keyboard', component: page('c-keyboard')},
    {path: '*', redirect: {name: '404'}}
  ]
})
