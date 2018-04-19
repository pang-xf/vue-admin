import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import members from './modules/members';
import addMovie from './modules/addMovie';
import admin from './modules/admin';
import editMovie from './modules/editMovie';
import movie from './modules/movie';
import search from './modules/search';
import count from './modules/count';
import login from './modules/login';
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
    members,
    addMovie,
    admin,
    editMovie,
    movie,
    search,
    count,
    login
  }
})
