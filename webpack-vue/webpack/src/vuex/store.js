//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//注册vuex
Vue.use(Vuex)

//状态\n
const state={
	userinfo:JSON.parse(sessionStorage.getItem('userinfo')),
	userlist:[]
}

//mutations操作state
const mutations={
	//保存用户数据
	SAVE_USERINFO(state,userinfo){
		//先把用户信息存入本地
		sessionStorage.setItem("userinfo",JSON.stringify(userinfo));
		
		//再更新数据
		state.userinfo=userinfo;
	},
	
	//获取全局的用户数据
	GET_USERLIST(state,userlist){
		state.userList=userlist;
	}
}

//定义actions  异步  主要commit mutations改变状态
const actions={
	GET_USERLIST({ commit }){
		return new Promise((resolve,reject) => {
			axios.get('/api/getuserlist').then(response => {
				//获取用户列表数据
				commit("GET_USERLIST",response.data);
				resolve();
			})
			
		})
		
	}
}

const getters={
	vipUsers:state => state.userList.filter(v => v.age>20)
}

//创建store仓库暴露出去
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
