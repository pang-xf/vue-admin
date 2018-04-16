import axios from 'axios'
const state = {
    // 修改影片信息  返回给前端状态码  1为成功 -1 为失败
    editStatus:null
};
const mutations = {
  EDIT_Movie_STUTAS(state,payload){
    state.editStatus=payload;
  },
};

const actions = {
  editMovie({commit},params){
      console.log(params);
    // axios.get("/api/movie/editMOvie",{
    //     id:params.id,
    //     form:params.form
    // })
    // .then(res=>{
    //   let payload = res;
    //   // console.log('editMOvie:'+ payload);
    //   commit("EDIT_Movie_STUTAS",payload)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  },
};
const getters = {
  // 获取添加状态1或者0
  editMovieStatus:state => {
    return state.editStatus
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}