<template>
	<!--首页头部-->
	<div class="home">
		<el-header style="text-align: right; font-size: 12px">
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人信息</el-dropdown-item>
					<el-dropdown-item>退出系统</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span class="username">
				{{username}}
				<!--从store的拿出   第一种方法-->
				<!--{{$store.state.userinfo.username}}-->
			</span>
		</el-header>
		<el-main>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>用户信息卡</span>
			    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			  </div>
			  <div class="text item">
			   	 用&nbsp;&nbsp;户&nbsp;&nbsp;名: {{userinfo.username}}
			  </div>
			  <div class="text item">
			   	 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码: {{userinfo.password}}
			  </div>
			  <div class="text item">
			   	 真实姓名: {{userinfo.realname}}
			  </div>
			  <div class="text item">
			   	 证件号码: {{userinfo.idType}}
			  </div>
			</el-card>
		</el-main>
	</div>
</template>
<script>
	//引入mapState
import {mapState} from 'vuex'
	
	//返回一个username
	export default{
		data(){
			return {
			}
		},
		computed:{
			/*username(){
				return this.$store.state.userinfo.username
			},*/
			//vuex新方法   辅助函数 获取state数据
			...mapState({
				userinfo:state=>state.userinfo,
				username:state=>state.userinfo.username
			})
			//这是一种方法
			/*userinfo(){
				return this.$store.state.userinfo
			}*/
		}
	}
</script>

<style>
	.el-header {
	    background-color: #B3C0D1;
	    color: #333;
	    line-height: 60px;
	  }
	  .home{
	  	width: 100%;
	  }
	  .username{
	  	font-size: 20px;
	  	color: #409eff;
	  }
	    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>