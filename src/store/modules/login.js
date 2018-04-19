import axios from 'axios'
const state = {
    login:'',
    admin:'',
};
const mutations = {
  LOGIN(state,payload){
    state.login=payload;
  },
  ADMIN(state,payload){
    state.admin=payload;
  },
};

const actions = {
  login2({commit},params){
    axios.get("/api/login",{
      params:{
        user: params.username,
        pwd: params.password
      }
    })
    .then(res=>{
      let user = {}
      user.id = 1
      user.nickName = '管理员'
      let payload =  res.code
      sessionStorage.setItem('token', JSON.stringify(res.token))
      sessionStorage.setItem('user',JSON.stringify(user))
      // 清除缓存的验证码cookie
      commit("LOGIN",payload)
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  getLoginAdmin ({commit}) {
    var user = sessionStorage.getItem('user')
    commit('ADMIN', JSON.parse(user))
  },
  logout ({commit}) {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
    commit('ADMIN', null)
  }
};
const getters = {
  // 获取添加状态1或者0
  Loginadmin:state => {
    return state.admin
  },
  login:state => {
    return state.login
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}