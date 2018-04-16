import axios from 'axios'
const state = {
    // 查询用户
    searchUser:{
        id:'1',
        name:'李宇',
        sex:'男',
        regTime:'2017-6-10'
    },
    // 查询影片
    searchMovie:{
        id:'1',
        name:'李宇',
        sex:'男',
        regTime:'2017-6-10'
    }
};
const mutations = {
  SEARCH_USER(state,payload){
    state.searchUser=payload;
  },
  SEARCH_MOVIE(state,payload){
    state.searchMovie=payload;
  },
};

const actions = {
    searchUser({commit},params){
      console.log(params);
    // axios.get("/api/movie/editMOvie",{
    //     name:params.name,
    // })
    // .then(res=>{
    //   let payload = res;
    //   // console.log('searchUser:'+ payload);
    //   commit("SEARCH_USER",payload)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    },
    searchMovie({commit},params){
        console.log(params);
      // axios.get("/api/movie/editMOvie",{
      //     id:params.id,
      //     form:params.form
      // })
      // .then(res=>{
      //   let payload = res;
      //   // console.log('searchMovie:'+ payload);
      //   commit("SEARCH_MOVIE",payload)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
};
const getters = {
  // 获取搜索的用户结果
  search_user:state => {
    return state.searchUser
  },
  // 获取搜索的影片结果
  search_Movie:state => {
    return state.searchMovie
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}