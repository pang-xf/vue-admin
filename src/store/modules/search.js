import axios from 'axios'
const state = {
    // 查询用户
    searchUser:{
      code:'2'
    },
    // 查询影片
    searchMovie:{
      code:'2'
    },
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
      axios.get("/api/searchUser",{
        params:{
          name:params.name,
        }
      })
      .then(res=>{
        if(res.code == -1){
          let payload = res;  
          commit("SEARCH_USER",payload)  
          return
        }
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].ROOT == 0){
            res.data[i].ROOT = '帅气滴管理员'
          }else{
            res.data[i].ROOT = '可爱滴用户'
          }
        }
        let payload = res;  
        commit("SEARCH_USER",payload)   
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    searchMovie({commit},params){
      axios.get("/api/searchMovie",{
        params:{
          name:params.name,
        }
      })
      .then(res=>{
        console.log(res);
        if(res.code == -1){
          let payload = res;  
          commit("SEARCH_MOVIE",payload)  
          return
        }
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].STATE == 0){
            res.data[i].STATE = '连载'
          }else{
            res.data[i].STATE = '完结'
          }
        }
        let payload = res; 
          commit("SEARCH_MOVIE",payload)  
      })
      .catch(function (error) {
        console.log(error);
      });
    },
};
const getters = {
  // 获取搜索的用户结果
  search_User:state => {
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