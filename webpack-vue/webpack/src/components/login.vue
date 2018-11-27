<template>
	<div class="login">
		<el-form :model="loginFrom" status-icon :rules="rules" ref="loginFrom" label-width="100px" class="demo-ruleForm">
			<h1 class="title">
				<i class="el-icon-setting"></i>
				登录</h1>
			<el-form-item label="账号" prop="username">
				<el-input type="text" v-model="loginFrom.username" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="loginFrom.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('loginFrom')">提交</el-button>
				<el-button @click="resetForm('loginFrom')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginFrom.checkPass !== '') {
            this.$refs.loginFrom.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginFrom.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
      	//登录表单的数据
        loginFrom: {
          username: '',
          password: '',
        },
        //验证规则
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	//保留this
          	let _this=this;
            //验证用户名和密码  发送给后端
            this.axios.post("/api/checklogin",{
            		username:_this.loginFrom.username,
            		password:_this.loginFrom.password,
            }).then(response => {
            	if(response.data.length){
            		_this.$store.commit('SAVE_USERINFO',response.data[0]);
            		
            		this.$message({
            			message:"恭喜你,登录成功",
            			type:"success"
            		});
            		//跳转到后台首页
            		_this.$router.push('/');
            		
            	}else{
            		this.$message.error('登录失败,请检查用户名或密码是否正确');
            	}
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
		html,body{
			margin: 0;
			padding: 0;
		}
		html,body,#app,.login{
			height: 100%;
		}
		.login{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.el-form{
			width: 400px;
			border: 1px solid #ccc;
			border-radius: 4px;
			padding:26px 45px 10px 10px;
			
		}
		.el-form .title{
			font-size: 1.3rem;
			font-weight: bold;
			padding: 0px 0 20px 180px;
		}
</style>