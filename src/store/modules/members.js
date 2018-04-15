import axios from 'axios'
const state = {
  members:[],
  userNum:null
};
const mutations = {
  GET_ALL_MEMBERS(state,payload){
    state.members=payload;
  },
  DEL_MEMBERS(state,payload){
    state.members=payload;
  },
  GET_USER_NUM(state,payload){
    state.userNum = payload;
  }
};

const actions = {
  getUserNum({commit},params){
    axios.get("/api/user/getUserCount")
    .then(res=>{
      let payload = res.length;
      // console.log('getUserNum:'+ payload);
      commit("GET_USER_NUM",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  getAllMembers({commit},params){
    axios.get("/api/user/getUserAll",{
      params:{
        root:params.root,
        pageSize:params.pageSize,
        curPage:params.curPage,
      }
    })
    .then(res=>{
      let payload = res;
      // console.log('getAllMembers');
      commit("GET_ALL_MEMBERS",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  delMembers({commit},params){
    axios.get("/api/user/delUser",{
      params:{
        root:params.root,
        id:params.id,
        pageSize:params.pageSize,
        curPage:params.curPage,
      }
    })
    .then(res=>{
      let payload = res;
      // console.log('delMembers'); 
      commit("DEL_MEMBERS",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
const getters = {
  // 获取按更新状态的数据
  members:state => {
    return state.members
  },
  // 用户总数
  userNum:state => {
    return state.userNum
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}