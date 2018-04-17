import axios from 'axios'
const state = {
    // 添加影片信息  返回给前端状态码  1为成功 -1 为失败
    addStatus:null
};
const mutations = {
  ADD_Movie(state,payload){
    state.addStatus=payload;
  },
};

const actions = {
  addMovie({commit},params){
      if(params.form.status == '完结'){
        params.form.status = 1
      }else{
        params.form.status = 0
      }
    axios.get("/api/movie/addMovie",{
      params:{
        form:params.form
      }
    })
    .then(res=>{
      let payload = res;
      console.log(res);
      commit("ADD_Movie",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  },
};
const getters = {
  // 获取添加状态1或者0
  addStatus:state => {
    return state.addStatus
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}