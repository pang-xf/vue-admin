import axios from 'axios'
const state = {
    // 获取管理员信息 修改管理员信息
    admin:'',
    editMsg:'',//修改结果 值为0或1
    editPwdStatus:'',//修改密码 值为0或1
};
const mutations = {
  GET_ADMIN_MSG(state,payload){
    state.admin=payload;
  },
  GET_EDIT_STATUS(state,payload){
    state.editMsg=payload;
  },
  GET_EDITPWD_STATUS(state,payload){
    state.editMsg=payload;
  },
};

const actions = {
    getAdminMsg({commit},params){
        console.log(params);
        // axios.get("/api/user/getUserAll",{root:params.root})
        // .then(res=>{
        //   let payload = res;
        //   // console.log('getAdminMsg:'+ payload);
        //   commit("GET_ADMIN_MSG",payload)
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    },
    editMsg({commit},params){
        console.log(params);
        // 两个参数 一个是修改的key  一个是value
        // axios.get("/api/admin/editAdmin",
        //     {
        //         key:params.key,
        //         value:params.value
        //     }
        // )
        // .then(res=>{
        //   let payload = res;
        //   // console.log('editMsg:'+ payload);
        //   commit("GET_EDIT_STATUS",payload)
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    },
    editPwd({commit},params){
      console.log(params);
      // 传入新的密码
      // axios.get("/api/admin/editAdmin",
      //     {
      //         newPwd:params.pwd,
      //     }
      // )
      // .then(res=>{
      //   let payload = res;
      //   // console.log('editPwd:'+ payload);
      //   commit("GET_EDITPWD_STATUS",payload)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
};
const getters = {
  admin:state => {
    return state.admin
  },
  editStatus:state =>{
    return state.editMsg
  },
  editPwdStatus:state =>{
    return state.editMsg
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}