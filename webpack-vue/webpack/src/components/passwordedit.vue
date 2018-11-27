<template>
	<div class="passwordedit">
		<el-header style="text-align: right; font-size: 12px">
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人信息</el-dropdown-item>
					<el-dropdown-item>退出系统</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>王小虎</span>
		</el-header>
		<el-main>
			修改密码
		</el-main>
	</div>
	
</template>

<script>
	
</script>

<style>
	.el-header {
	    background-color: #B3C0D1;
	    color: #333;
	    line-height: 60px;
	  }
	 .passwordedit{
	  	width: 100%;
	 }
</style>