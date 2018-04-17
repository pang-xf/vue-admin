import axios from 'axios'
const state = {
    // 获取管理员信息 修改管理员信息
    admin:'',
    editMsg:'',//修改结果 值为0或1
    editPwdStatus:false,//修改密码 值为0或1
};
const mutations = {
  GET_ADMIN_MSG(state,payload){
    state.admin=payload;
  },
  GET_EDIT_STATUS(state,payload){
    state.editMsg=payload;
  },
  GET_EDITPWD_STATUS(state,payload){
    state.editPwdStatus=payload;
  },
  CHANGE_EDITPWD_STATUS(state,payload){
    state.editPwdStatus=payload;
  },
};

const actions = {
    getAdminMsg({commit},params){
        axios.get("/api/admin/getAdminMsg")
        .then(res=>{
          let payload = res.data[0];
          commit("GET_ADMIN_MSG",payload)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editMsg({commit},params){
        // 两个参数 一个是修改的key  一个是value
      axios.get("/api/admin/editAdmin",{
        params:{
          key:params.key,
          value:params.value
        }
      })
      .then(res=>{
        let payload = res;
        commit("GET_EDIT_STATUS",payload)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    editPwd({commit},params){
      // 传入新的密码
      axios.get("/api/admin/editAdmin",
          {
            params:{
              key: 'pwd',
              value:params.pwd
            }
          }
      )
      .then(res=>{
        let payload
        if(res.code == -1){
          payload = false
        }else{
          payload = true
        }
        commit("GET_EDITPWD_STATUS",payload)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    handlrPwdStatus({commit},params){
      let payload = false
      commit("CHANGE_EDITPWD_STATUS",payload)
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
    return state.editPwdStatus
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}