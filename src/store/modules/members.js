import axios from 'axios'
const state = {
  members:[],
};
const mutations = {
  GET_ALL_MEMBERS(state,payload){
    state.members=payload;
  },
  DEL_MEMBERS(state,payload){
    state.members=payload;
  }
};

const actions = {
  getAllMembers({commit},params){
    axios.get("/api/user/getUserAll",{
      params:{
        root:params.root,
        pageSize:params.pageSize,
        curPage:params.curPage,
      }
    })
    .then(res=>{
      let payload = res.data;
      console.log(payload);
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
      console.log(payload); 
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
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}