// 计算当前所有的用户数 和 所有的影片数
import axios from 'axios'
const state = {
    movieNum:{
      length:''
    },
    memberNum:{
      length:''
    }
};
const mutations = {
  GET_MOVIE_NUM(state,payload){
    state.movieNum=payload;
  },
  GET_MEMBER_NUM(state,payload){
    state.memberNum=payload;
  }
};

const actions = {
  getMemNum({commit},params){
    axios.get("/api/user/getUserCount")
    .then(res=>{
      let payload = res;
      // console.log(res);
      commit("GET_MEMBER_NUM",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
const getters = {
  getMemNum:state => {
    return state.memberNum
  },
  getMovieNum:state => {
    return state.movieNum
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}