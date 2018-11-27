//引入注册全局组件模板
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
//引入axios
import axios from 'axios'
//挂载到vue原型上
Vue.prototype.axios=axios;
import router from './router'
import store from './vuex/store'
store.dispatch('GET_USERLIST').then(() =>{
	console.log("用户数据",store.state.userList);
	
});
Vue.config.productionTip = false
//注册elementui
Vue.use(ElementUI);
// eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
