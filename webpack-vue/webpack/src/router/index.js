//引入路由
import Vue from 'vue'
import Router from 'vue-router'
//引入组件
//import login from '@/components/login'
//import index from '@/components/index'
//vue异步加载组件
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const vipusers = () => import('@/components/vipusers')
const userlist = () => import('@/components/userlist')
const home = () => import('@/components/home')
const passwordedit = () => import('@/components/passwordedit')
//注册路由
Vue.use(Router)

//导出路由
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
       {
	      path: '',
	      name: 'home',
	      component: home
	    },
       {
	      path: '/userlist',
	      name: 'userlist',
	      component: userlist
	    }, {
	      path: '/vipusers',
	      name: 'vipusers',
	      component: vipusers
	    }, {
	      path: '/passwordedit',
	      name: 'passwordedit',
	      component: passwordedit
	    }
      ]
    }
  ]
})
