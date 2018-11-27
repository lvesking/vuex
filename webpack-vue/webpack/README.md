npm install webpack -g
	npm install vue-cli -g
	vue init webpack my-project
? Project name  xxx    项目名称
? Project description  xxx    项目描述
? Author  xxx    项目作者
? Vue build standalone    构建方式
? Install vue-router? Yes  是否安装路由
? Use ESLint to lint your code? No    是否启用eslint检测规则
? Setup unit tests with Karma + Mocha? No    是否启用单元测试
? Setup e2e tests with Nightwatch? No    是否启用端到端测试
	npm install    安装项目依赖
	cd 你的目标目录    进到项目目录
	npm run dev    在项目下启动项目
	config里index.js可以修改端口
	
	##element组件
	快速上手:http://element-cn.eleme.io/#/zh-CN/component/quickstart
	
	cnpm i axios --save   //一个库
		//引入axios
		import axios from 'axios'
		//挂载到vue原型上
		Vue.prototype.axios=axios;
###node后台
	安装express模块
	如果express命令用不了 npm install -g express-generator
	$	express server -e
	app.js设置监听端口   npm start  启动服务
	config/index.js   proxyTable参数配置代理
						'/api': {
       						 target: 'http://localhost:8888/', // 接口的域名
       							 // secure: false,  // 如果是https接口，需要配置这个参数
        						changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
       						 pathRewrite: {
         					 '^/api': ''
      						  }

###连接数据库 (mysql)
	创建connjs    暴露connection  index接收
	//跳转到后台首页  _this.$router.push('/index');
vue异步加载组件 import
	router中index.js
		//引入组件
			import login from '@/components/login'
		换成
			const login = () => import('@/components/login')
###vuex
	$ npm i vuex --save
	引入vuex
	index.js
		children:[]   //子路由


	//vuex新方法   辅助函数 获取state数据
			...mapState({
				userinfo:state=>state.userinfo,
				username:state=>state.userinfo.username
			})
	const actions={
		GET_USERLIST({ commit }){
			axios.get('/api/getuserlist').then(response => {
				console.log('获取用户数据',response);
			})
		}
	}



###getters和mapGetters(定义全局共享属性)
	const getters={
	vipUsers:state => state.userList.filters(v => v.age>20);
	}
	...mapGetters(['vipUsers'])



###引入辅助函数
	import {mapState,mapActions,mapGetters} from  "vuex"
	
###state.js
	state			//状态
	mutations		//mutations操作state
	actions			//异步主要commit mutations改变状态
	getters			//定义全局属性
	在main.js引入文件import store from './vuex/store'
###main.js
	全局引入和注册
###index.html   引入全局      app.vue   入口          config里的index.js中proxyTable为代理域名   		
###router中的index.js为路由设计和路径               		components中vue文件是主要vue形式的html  对应路由设计
